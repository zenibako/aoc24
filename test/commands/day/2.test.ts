import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('day:2', () => {
  it('runs day:2 cmd', async () => {
    const {stdout} = await runCommand('day:2')
    expect(stdout).to.contain('hello world')
  })

  it('runs day:2 --name oclif', async () => {
    const {stdout} = await runCommand('day:2 --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
