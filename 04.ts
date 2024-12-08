import fs from 'fs'

const INPUT = fs.readFileSync('04_input.txt', 'utf8')
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


const rows = INPUT.split('\n')

const letterIndexes: Record<string, number[][]> = {
  X: [],
  M: [],
  A: [],
  S: [],
}

for (let y = 0; y < rows.length; y++) {
  const row = rows[y]
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

const partOneMatches = letterIndexes.X.reduce((acc, [ x, y ]) => {
  const isDirection = { ...POSSIBLE_MATCHES }
  for (let i = 1; i < 4; i++) {
    const nextLetter = Object.keys(letterIndexes)[i]
    isDirection.LR    &&= matchesLetterAt( nextLetter, x + i,  y     )
    isDirection.RL    &&= matchesLetterAt( nextLetter, x - i,  y     )
    isDirection.TB    &&= matchesLetterAt( nextLetter, x,      y - i )
    isDirection.BT    &&= matchesLetterAt( nextLetter, x,      y + i )
    isDirection.TLBR  &&= matchesLetterAt( nextLetter, x + i,  y - i )
    isDirection.TRBL  &&= matchesLetterAt( nextLetter, x - i,  y - i )
    isDirection.BRTL  &&= matchesLetterAt( nextLetter, x - i,  y + i )
    isDirection.BLTR  &&= matchesLetterAt( nextLetter, x + i,  y + i )
  }
  const actualMatches = Object.entries(isDirection)
    .filter(([,isMatch]) => isMatch) 
    .map(([direction]) => direction)
  return acc + actualMatches.length
}, 0)

const partTwoMatches = letterIndexes.A.reduce((acc, [ x, y ]) => {
  const isDirection = { ...POSSIBLE_MATCHES }
  isDirection.TLBR  = matchesLetterAt( 'M', x - 1,  y + 1 ) && matchesLetterAt( 'S', x + 1, y - 1 )
  isDirection.TRBL  = matchesLetterAt( 'M', x + 1,  y + 1 ) && matchesLetterAt( 'S', x - 1, y - 1 )
  isDirection.BRTL  = matchesLetterAt( 'M', x + 1,  y - 1 ) && matchesLetterAt( 'S', x - 1, y + 1 )
  isDirection.BLTR  = matchesLetterAt( 'M', x - 1,  y - 1 ) && matchesLetterAt( 'S', x + 1, y + 1 )
  
  if ((isDirection.BLTR || isDirection.TRBL) && (isDirection.TLBR || isDirection.BRTL)) {
    acc++
  }
  
  return acc
}, 0)

console.log(`Part 1: ${partOneMatches}`)
console.log(`Part 2: ${partTwoMatches}`)
