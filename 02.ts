import INPUT from './02_input'

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

const safeReports = INPUT.filter((report) => (!getUnsafeLevelIndexes(report).length))
console.log(`Part One: ${safeReports.length}`)

const safeReportsWithDampener = INPUT.filter((report) => {
  return getUnsafeLevelIndexes(report).reduce((acc, i) => {
    const reportForDampener = [...report]
    reportForDampener.splice(i)
    const unsafeLevelIndexesWithDampener = getUnsafeLevelIndexes(reportForDampener)
    return acc && !unsafeLevelIndexesWithDampener.length
  }, true)
})

console.log(`Part Two: ${safeReportsWithDampener.length}`)
