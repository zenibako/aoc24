import { Args, Command, Flags } from '@oclif/core'
import fs from 'node:fs'

const POSSIBLE_MATCHES = {
  LR: true,
  RL: true,
  TB: true,
  BT: true,
  TLBR: true,
  TRBL: true,
  BRTL: true,
  BLTR: true
}

export default class Day4 extends Command {
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
    const { args } = await this.parse(Day4)

    if (!args.file) {
      this.error('No file path provided')
    }

    const input = fs.readFileSync(args.file, 'utf8')


    const rows = input.split('\n')

    const letterIndexes: Record<string, number[][]> = {
      X: [],
      M: [],
      A: [],
      S: [],
    }

    for (const row of rows) {
      const y = rows.indexOf(row)
      console.log(row)
      for (let x = 0; x < row.length; x++) {
        const letter = row.charAt(x)
        if (!Object.keys(letterIndexes).includes(letter)) {
          continue
        }

        letterIndexes[letter].push([x, y])
      }
    }

    const matchesLetterAt = (letter: string, x: number, y: number) => rows[y]?.charAt(x) === letter

    const getActualMatches = (x: number, y: number) => {
      const isDirection = { ...POSSIBLE_MATCHES }
      for (let i = 1; i < 4; i++) {
        const nextLetter = Object.keys(letterIndexes)[i]
        isDirection.LR &&= matchesLetterAt(nextLetter, x + i, y)
        isDirection.RL &&= matchesLetterAt(nextLetter, x - i, y)
        isDirection.TB &&= matchesLetterAt(nextLetter, x, y - i)
        isDirection.BT &&= matchesLetterAt(nextLetter, x, y + i)
        isDirection.TLBR &&= matchesLetterAt(nextLetter, x + i, y - i)
        isDirection.TRBL &&= matchesLetterAt(nextLetter, x - i, y - i)
        isDirection.BRTL &&= matchesLetterAt(nextLetter, x - i, y + i)
        isDirection.BLTR &&= matchesLetterAt(nextLetter, x + i, y + i)
      }

      return Object.entries(isDirection)
        .filter(([, isMatch]) => isMatch)
        .map(([direction]) => direction)
    }

    const isXMas = (x: number, y: number) => {
      const isDirection = { ...POSSIBLE_MATCHES }
      isDirection.TLBR = matchesLetterAt('M', x - 1, y + 1) && matchesLetterAt('S', x + 1, y - 1)
      isDirection.TRBL = matchesLetterAt('M', x + 1, y + 1) && matchesLetterAt('S', x - 1, y - 1)
      isDirection.BRTL = matchesLetterAt('M', x + 1, y - 1) && matchesLetterAt('S', x - 1, y + 1)
      isDirection.BLTR = matchesLetterAt('M', x - 1, y - 1) && matchesLetterAt('S', x + 1, y + 1)

      return ((isDirection.BLTR || isDirection.TRBL) && (isDirection.TLBR || isDirection.BRTL))
    }

    let partOneMatches = 0
    for (const [x, y] of letterIndexes.X) {
      partOneMatches += getActualMatches(x, y).length
    }

    let partTwoMatches = 0
    for (const [x, y] of letterIndexes.A) {
      if (isXMas(x, y)) {
        partTwoMatches++
      }
    }

    console.log(`Part 1: ${partOneMatches}`)
    console.log(`Part 2: ${partTwoMatches}`)
  }
}
