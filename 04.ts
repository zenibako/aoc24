
import fs from 'fs'

const INPUT = fs.readFileSync('04_input.txt', 'utf8')

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

const matchCount = letterIndexes.X.reduce((acc, [ x, y ]) => {
  const possibleMatches = {
    LR: true,
    RL: true,
    TB: true,
    BT: true,
    LTBR: true,
    RTBL: true,
    RBTL: true,
    LBTR: true
  }

  for (let i = 1; i < 4; i++) {
    const matchesNextLetterAt = (x: number, y: number) => (Object.keys(letterIndexes)[i] === rows[y]?.charAt(x))
    possibleMatches.LR    &&= matchesNextLetterAt( x + i,  y     )
    possibleMatches.RL    &&= matchesNextLetterAt( x - i,  y     )
    possibleMatches.TB    &&= matchesNextLetterAt( x,      y - i )
    possibleMatches.BT    &&= matchesNextLetterAt( x,      y + i )
    possibleMatches.LTBR  &&= matchesNextLetterAt( x + i,  y - i )
    possibleMatches.RTBL  &&= matchesNextLetterAt( x - i,  y - i )
    possibleMatches.RBTL  &&= matchesNextLetterAt( x - i,  y + i )
    possibleMatches.LBTR  &&= matchesNextLetterAt( x + i,  y + i )
  }
  const actualMatches = Object.entries(possibleMatches)
    .filter(([,isMatch]) => isMatch) 
    .map(([direction]) => direction)
  return acc + actualMatches.length
}, 0)

console.log(`Part 1: ${matchCount}`)
