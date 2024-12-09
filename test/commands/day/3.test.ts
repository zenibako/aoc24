import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('day:3', () => {
  it('runs day:3 cmd', async () => {
    const {stdout} = await runCommand('day:3')
    expect(stdout).to.contain('hello world')
  })

  it('runs day:3 --name oclif', async () => {
    const {stdout} = await runCommand('day:3 --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
