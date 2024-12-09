import { Args, Command, Flags } from '@oclif/core'
import fs from 'node:fs'

export default class Day3 extends Command {

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
  }

  public async run(): Promise<void> {
    const { args } = await this.parse(Day3)

    if (!args.file) {
      this.error('No file path provided')
    }

    const input = fs.readFileSync(args.file, 'utf8')

    const pattern = /(mul\(\d+,\d+\))|(do\(\))|(don't\(\))/g
    const matches = input.match(pattern)

    if (!matches) {
      this.error('No matches found.')
    }

    let isDo = true
    let partOneTotal = 0
    let partTwoTotal = 0
    for (const match of matches) {
      if (match.startsWith('mul')) {
        const numbers = match.slice(match.search('mul') + 4, -1)
        const [a, b] = numbers.split(',')
        const amount = (Number.parseInt(a, 10) * Number.parseInt(b, 10))

        if (isDo) {
          partTwoTotal += amount
        }

        partOneTotal += amount
      } else if (match.startsWith('don\'t')) {
        isDo = false
      } else if (match.startsWith('do')) {
        isDo = true
      }
    }

    this.log(`Part 1: ${partOneTotal}`)
    this.log(`Part 2: ${partTwoTotal}`)
  }
}
