import INPUT from './02_input'

function getUnsafeLevelIndexes(report: number[]): number[] {
  let expectedIncrementDirection = 0
  return report.filter((currentLevel, i) => {
    if (i === 0) {
      return false
    }
    let incrementDirection = 0
    const previousLevel = report[i - 1]
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
      return true 
    }
    const absoluteIncrementAmount = incrementAmount * incrementDirection
    if (absoluteIncrementAmount < 1 || absoluteIncrementAmount > 3) {
      return true
    }
  })
}

const safeReports = INPUT.filter((report) => (getUnsafeLevelIndexes(report).length === 0))
console.log(`Part One: ${safeReports.length}`)
