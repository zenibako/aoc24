import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('day:5', () => {
  it('runs day:5 cmd', async () => {
    const {stdout} = await runCommand('day:5')
    expect(stdout).to.contain('hello world')
  })

  it('runs day:5 --name oclif', async () => {
    const {stdout} = await runCommand('day:5 --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
