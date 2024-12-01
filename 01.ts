import INPUT from "./01_input"

const getListItemFromRow = (row: number[], i: number): number => (row[i])
const sortItemsAscending = (numbers: number[]) => numbers.sort((a: number, b: number) => (a - b))

const sortedL = sortItemsAscending(INPUT.map((row: number[]) => getListItemFromRow(row, 0)))
const sortedR = sortItemsAscending(INPUT.map((row: number[]) => getListItemFromRow(row, 1)))

const totalDistance = sortedL.reduce((acc, valueL, i) => {
  const valueR = sortedR[i]
  const distance = valueL - valueR
  if (distance > 0) {
    return acc + distance
  } else if (distance < 0) {
    return acc - distance
  } else {
    return acc
  }
}, 0)

console.log(`Part 1: ${totalDistance}`)

const similarityScore = sortedL.reduce((acc, valueL) => {
  const { length: count } = sortedR.filter(n => n === valueL)
  return acc + (valueL * count)
}, 0)

console.log(`Part 2: ${similarityScore}`)
