import fs from 'fs'

const INPUT = fs.readFileSync('03_input.txt', 'utf8')
const pattern = /(mul\([0-9]+,[0-9]+\))|(do\(\))|(don't\(\))/g
const matches = INPUT.match(pattern)

let isDo = true
let partTwoTotal = 0
const total = matches.reduce((acc: number, match: string) => {
  console.log(match)
  if (match.startsWith('mul')) {
    const numbers = match.substring(match.search('mul') + 4, match.length - 1)
    const [a, b] = numbers.split(',')
    const amount = (parseInt(a) * parseInt(b))
    if (isDo) {
      partTwoTotal += amount
    }
    return acc + amount
  } else if (match.startsWith('don\'t')) {
    isDo = false
  } else if (match.startsWith('do')) {
    isDo = true
  }
  return acc
}, 0)

console.log(`Part 1: ${total}`)
console.log(`Part 2: ${partTwoTotal}`)
