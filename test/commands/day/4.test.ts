import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('day:4', () => {
  it('runs day:4 cmd', async () => {
    const {stdout} = await runCommand('day:4')
    expect(stdout).to.contain('hello world')
  })

  it('runs day:4 --name oclif', async () => {
    const {stdout} = await runCommand('day:4 --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
