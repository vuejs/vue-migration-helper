'use strict'

const stripAnsi = require('strip-ansi')

global.catchLog = logger => {
  const origLog = console.log
  console.log = jasmine.createSpy('log')
  logger()
  const stdout = console.log.calls.all().map(call => {
    return call.args.map(arg => {
      return stripAnsi(arg)
    }).join('')
  }).join('\n')
  console.log = origLog
  return stdout
}
