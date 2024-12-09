import { Args, Command } from '@oclif/core'
import fs from 'node:fs'

enum Direction { Left, Right, Up, Down }
const directions: Map<Direction, number[]> = new Map([
  [Direction.Left, [-1, 0]],
  [Direction.Right, [1, 0]],
  [Direction.Up, [0, -1]],
  [Direction.Down, [0, 1]],
])

function turn90Degrees(dir: Direction) {
  switch (dir) {
    case Direction.Up:
      return Direction.Right
    case Direction.Right:
      return Direction.Down
    case Direction.Down:
      return Direction.Left
    case Direction.Left:
      return Direction.Up
  }
}

export default class Day6 extends Command {
  static override args = {
    file: Args.string({ description: 'file to read' }),
  }

  static override description = 'describe the command here'

  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  public async run(): Promise<{ partOne: number, partTwo: number }> {
    const { args } = await this.parse(Day6)

    if (!args.file) {
      this.error('No file path provided')
    }

    const input = fs.readFileSync(args.file, 'utf8')
      .split('\n')
      .filter(str => str?.length)

    const guard = {
      position: [0, 0],
      direction: Direction.Up
    }

    const map = input.map((row, y) => row
      .split('')
      .filter(str => str?.length)
      .map((str, x) => {
        if (str === '^') {
          guard.position = [x, y]
        }
        return str !== '#'
      })
    )


    const distinctPositions: Set<string> = new Set([JSON.stringify(guard.position)])
    const renderMap = (pos: number[], dir: Direction) => {
      let mapOutput = ''
      let xMap = 0
      let yMap = 0
      for (const row of map) {
        for (const space of row) {
          const [xGuard, yGuard] = pos
          if (xMap === xGuard && yMap === yGuard) {
            switch (dir) {
              case Direction.Up:
                mapOutput += '^'
                break
              case Direction.Down:
                mapOutput += 'v'
                break
              case Direction.Left:
                mapOutput += '<'
                break
              case Direction.Right:
                mapOutput += '>'
            }
          } else if (distinctPositions.has(JSON.stringify([ xMap, yMap]))) {
            mapOutput += 'X'
          } else {
            mapOutput += space ? '.' : '#'
          }
          xMap++
        }
        mapOutput += '\n'
        xMap = 0
        yMap++
      }
      this.log(mapOutput)
    }

    renderMap(guard.position, guard.direction)

    const top = 0
    const bottom = map.length
    const left = 0
    const right = map[0].length

    let [x, y] = guard.position
    try {
      while (x >= left && x <= right && y >= top && y <= bottom) {
        const { direction } = guard
        const [xDir, yDir] = directions.get(direction)!
        let xNext = x + xDir
        let yNext = y + yDir
        while (map[yNext][xNext] === true) {
          x = xNext
          y = yNext
          xNext += xDir
          yNext += yDir
          distinctPositions.add(JSON.stringify([x, y]))
          guard.position = [x, y]
        }
        guard.direction = turn90Degrees(direction)
      }
    } catch (e) {
      this.error(e as Error)
    } finally {
      this.log(distinctPositions.size.toString())
      this.log(JSON.stringify({ top, bottom, left, right, x, y }))
      renderMap(guard.position, guard.direction)
    }

    const output = { partOne: distinctPositions.size, partTwo: 0}
    return output
  }
}
