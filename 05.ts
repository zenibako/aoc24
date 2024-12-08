import fs from 'fs'

const INPUT = fs.readFileSync('05_input.txt', 'utf8')

function strArrToNumArr(arr: string[]): number[] {
  return arr.filter(str => str.length).map(str => parseInt(str))
}

function determineRulePlacement(update: number[], selectedPage: number, comparePage: number): number {
  const afterPages = PAGE_ORDERING_RULES.filter((rule) => rule[0] === selectedPage).map((rule) => rule[1])
  const beforePages = PAGE_ORDERING_RULES.filter((rule) => rule[1] === selectedPage).map((rule) => rule[0])
  const selectedIndex = update.indexOf(selectedPage)
  const comparedIndex = update.indexOf(comparePage)
  const comparedIsBefore = comparedIndex < selectedIndex
  const comparedIsAfter = selectedIndex < comparedIndex
  if (afterPages.includes(comparePage) && comparedIsBefore) {
    // selected page should come before
    return -1
  } else if (beforePages.includes(comparePage) && comparedIsAfter) {
    // selected page should come after
    return 1
  }
  return 0
}

// TODO: Rewrite follows rules so it uses determineRulePlacement algorithm
function followsRules(update: number[]) {
  for (let i = 0; i < update.length; i++) {
    const selectedPage = update[i]
    const afterPageRules = PAGE_ORDERING_RULES.filter((rule) => rule[0] === selectedPage).map((rule) => rule[1])
    const beforePageRules = PAGE_ORDERING_RULES.filter((rule) => rule[1] === selectedPage).map((rule) => rule[0])
    for (let j = 0; j < update.length; j++) {
      if (i === j) {
        continue
      }
      const comparePage = update[j]
      if (afterPageRules.includes(comparePage) && j < i) {
        // Rule broken because compared page is before current page
        return false
      } else if (beforePageRules.includes(comparePage) && j > i) {
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

const INPUT_PARTS = INPUT.split('\n\n')
const PAGE_ORDERING_RULES = INPUT_PARTS[0].split('\n').map(rule => strArrToNumArr(rule.split('|')))
const UPDATES = INPUT_PARTS[1].split('\n').map(update => strArrToNumArr(update.split(','))).filter(update => update.length)

const output = UPDATES.reduce((acc, update) => {
  const lastIndex = update.length - 1
  const middleIndex = lastIndex - lastIndex / 2
  if (followsRules(update)) {
    acc.partOne += update[middleIndex]
  } else {
    const fixedUpdate = fixUpdate(update)
    acc.partTwo += fixedUpdate[middleIndex]
  }
  return acc
}, { partOne: 0, partTwo: 0 })

console.log(`Part 1 output: ${output.partOne}`)
console.log(`Part 2 output: ${output.partTwo}`)
