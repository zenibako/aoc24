import { Args, Command, Flags } from '@oclif/core'
import fs from 'node:fs'

const getListItemFromRow = (row: number[], i: number): number => (row[i])
const sortItemsAscending = (numbers: number[]) => numbers.sort((a: number, b: number) => (a - b))

export default class Day1 extends Command {
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
    const { args } = await this.parse(Day1)

    if (!args.file) {
      this.error('No file path provided')
    }

    const body = fs.readFileSync(args.file, 'utf8')
    const input = body.split('\n')
      .filter(str => str?.length)
      .map(row => row
        .split('  ')
        .filter(str => str?.length)
        .map(str => Number.parseInt(str, 10))
      )

    const sortedL = sortItemsAscending(input.map((row: number[]) => getListItemFromRow(row, 0)))
    const sortedR = sortItemsAscending(input.map((row: number[]) => getListItemFromRow(row, 1)))

    let totalDistance = 0
    let similarityScore = 0
    for (const valueL of sortedL) {
      const i = sortedL.indexOf(valueL)
      const valueR = sortedR[i]
      const distance = valueL - valueR
      if (distance > 0) {
        totalDistance += distance
      } else if (distance < 0) {
        totalDistance -= distance
      }

      const { length: count } = sortedR.filter(n => n === valueL)
      similarityScore += valueL * count
    }

    this.log(`Part 1: ${totalDistance}`)
    this.log(`Part 2: ${similarityScore}`)
  }
}
