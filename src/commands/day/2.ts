import { Args, Command, Flags } from '@oclif/core'
import fs from 'node:fs'

function getUnsafeLevelIndexes(report: number[]): number[] {
  let expectedIncrementDirection = 0
  const unsafeLevelIndexes = new Set<number>()
  for (let i = 1; i < report.length; i++) {
    let incrementDirection = 0
    const j = i - 1
    const currentLevel = report[i]
    const previousLevel = report[j]
    const incrementAmount = currentLevel - previousLevel
    if (incrementAmount > 0) {
      incrementDirection = 1
    } else if (incrementAmount < 0) {
      incrementDirection = -1
    }

    if (i === 1) {
      expectedIncrementDirection = incrementDirection
    }

    if (incrementDirection !== expectedIncrementDirection) {
      unsafeLevelIndexes.add(i)
      unsafeLevelIndexes.add(j)
    }

    const absoluteIncrementAmount = incrementAmount * incrementDirection
    if (absoluteIncrementAmount < 1 || absoluteIncrementAmount > 3) {
      unsafeLevelIndexes.add(i)
      unsafeLevelIndexes.add(j)
    }
  }

  return [...unsafeLevelIndexes]
}

export default class Day2 extends Command {
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

  public async run(): Promise<{ partOne: number, partTwo: number }> {
    const { args } = await this.parse(Day2)

    if (!args.file) {
      this.error('No file path provided')
    }

    const body = fs.readFileSync(args.file, 'utf8')
    const input = body.split('\n')
      .filter(str => str?.length)
      .map(row => row
        .split(' ')
        .filter(str => str?.length)
        .map(str => Number.parseInt(str, 10))
      )

    const safeReports = input.filter((report) => (getUnsafeLevelIndexes(report).length === 0))
    this.log(`Part 1: ${safeReports.length}`)

    const safeReportsWithDampener = input.filter((report) => {
      let isSafe = true
      const unsafeLevelIndexes = getUnsafeLevelIndexes(report)
      for (const i of unsafeLevelIndexes) {
        const reportForDampener = [...report]
        reportForDampener.splice(i)
        const unsafeLevelIndexesWithDampener = getUnsafeLevelIndexes(reportForDampener)
        isSafe &&= unsafeLevelIndexesWithDampener.length === 0
      }

      return isSafe
    })

    const output = { partOne: safeReports.length, partTwo: safeReportsWithDampener.length }
    this.log(JSON.stringify(output))
    return output
  }
}
