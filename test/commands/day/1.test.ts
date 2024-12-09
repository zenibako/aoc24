import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('day:1', () => {
  it('runs day:1 cmd', async () => {
    const {stdout} = await runCommand('day:1')
    expect(stdout).to.contain('hello world')
  })

  it('runs day:1 --name oclif', async () => {
    const {stdout} = await runCommand('day:1 --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
