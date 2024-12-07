import fs from 'fs'

const INPUT = fs.readFileSync('03_input.txt', 'utf8')
const pattern = /mul\([0-9]+,[0-9]+\)/g
const muls = INPUT.match(pattern)

const total = muls.reduce((acc: number, mul: string) => {
  console.log(mul)
  const numbers = mul.substring(mul.search('mul') + 4, mul.length-1)
  const [a, b] = numbers.split(',')
  return acc + (parseInt(a) * parseInt(b))
}, 0)

console.log(`Part 1: ${total}`)
