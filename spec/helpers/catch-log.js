'use strict'

const stripAnsi = require('strip-ansi')

global.catchLog = (logger, callback) => {
  const origLog = console.log
  console.log = jasmine.createSpy('log')

  function sanitizeLogs () {
    const stdout = console.log.calls.all().map(call => {
      return call.args.map(arg => {
        return stripAnsi(arg)
      }).join('')
    }).join('\n')
    console.log = origLog
    if (callback) {
      callback(stdout)
    }
    return stdout
  }

  if (callback) {
    logger(() => {
      sanitizeLogs()
    })
  } else {
    logger()
    return sanitizeLogs()
  }
}
