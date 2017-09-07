import { expect } from 'chai'
import { readFile } from '../helpers/utils'
const { exec } = require('child_process')

describe('css task', () => {
  before(done => {
    exec('gulp css', { cwd: __dirname })
    exec('gulp css --env production', { cwd: __dirname }, () => { done() })
  })

  it('the `gulp css` command should be generate a non minified file', () => {
    const expected = readFile('expected/expected.css')
    expect(expected).to.equal(readFile('output/main.css'))
  })

  it('the `gulp css --env production` command should be generate a minified file', () => {
    const expected = readFile('expected/expected.min.css')
    expect(expected).to.equal(readFile('output/main.min.css'))
  })
})