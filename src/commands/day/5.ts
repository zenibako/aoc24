
import { Args, Command, Flags } from '@oclif/core'
import fs from 'node:fs'

function strArrToNumArr(arr: string[]): number[] {
  return arr.filter(str => str.length).map(str => Number.parseInt(str, 10))
}

export default class Day5 extends Command {
  static override args = {
    file: Args.string({ description: 'file to read' }),
  }

  static override description = 'describe the command here'

  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static override flags = {
    // flag with no value (-f, --force)
    force: Flags.boolean({ char: 'f' }),
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({ char: 'n', description: 'name to print' }),
  }

  public async run(): Promise<void> {
    const { args } = await this.parse(Day5)

    if (!args.file) {
      this.error('No file path provided')
    }

    const input = fs.readFileSync(args.file, 'utf8')

    function determineRulePlacement(update: number[], selectedPage: number, comparePage: number): number {
      const afterPages = orderingRules.filter((rule) => rule[0] === selectedPage).map((rule) => rule[1])
      const beforePages = orderingRules.filter((rule) => rule[1] === selectedPage).map((rule) => rule[0])
      const selectedIndex = update.indexOf(selectedPage)
      const comparedIndex = update.indexOf(comparePage)
      const comparedIsBefore = comparedIndex < selectedIndex
      const comparedIsAfter = selectedIndex < comparedIndex

      if (afterPages.includes(comparePage) && comparedIsBefore) {
        // selected page should come before
        return -1
      }

      if (beforePages.includes(comparePage) && comparedIsAfter) {
        // selected page should come after
        return 1
      }

      return 0
    }

    // TODO: Rewrite follows rules so it uses determineRulePlacement algorithm
    function followsRules(update: number[]) {
      for (let i = 0; i < update.length; i++) {
        const selectedPage = update[i]
        const afterPageRules = orderingRules.filter((rule) => rule[0] === selectedPage).map((rule) => rule[1])
        const beforePageRules = orderingRules.filter((rule) => rule[1] === selectedPage).map((rule) => rule[0])
        for (const comparedPage of update) {
          const selectedIndex = update.indexOf(selectedPage)
          const comparedIndex = update.indexOf(comparedPage)
          if (selectedIndex === comparedIndex) {
            continue
          }

          const comparedIsBefore = comparedIndex < selectedIndex
          const comparedIsAfter = selectedIndex < comparedIndex
          if (afterPageRules.includes(comparedPage) && comparedIsBefore) {
            // Rule broken because compared page is before current page
            return false
          }

          if (beforePageRules.includes(comparedPage) && comparedIsAfter) {
            // Rule broken because compared page is after current page
            return false
          }
        }
      }

      return true
    }

    function fixUpdate(update: number[]) {
      const output = [...update]
      output.sort((a, b) => determineRulePlacement(update, a, b))
      return output
    }

    const inputParts = input.split('\n\n')
    const orderingRules = inputParts[0].split('\n').map(rule => strArrToNumArr(rule.split('|')))
    const pageUpdates = inputParts[1].split('\n').map(update => strArrToNumArr(update.split(','))).filter(update => update.length)

    let partOneOutput = 0
    let partTwoOutput = 0
    for (const update of pageUpdates) {
      const lastIndex = update.length - 1
      const middleIndex = lastIndex - lastIndex / 2
      if (followsRules(update)) {
        partOneOutput += update[middleIndex]
      } else {
        const fixedUpdate = fixUpdate(update)
        partTwoOutput += fixedUpdate[middleIndex]
      }
    }

    this.log(`Part 1: ${partOneOutput}`)
    this.log(`Part 2: ${partTwoOutput}`)
  }
}
