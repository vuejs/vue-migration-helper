'use strict'

global.createRuleChecker = function (ruleName) {
  const stripAnsi = require('strip-ansi')
  const assertRule = require('../../helpers/assert-rule')

  const rule = require('../../rules/' + ruleName)
  return function (line) {
    const warning = assertRule({
      line: line,
      lineNum: 42,
      file: 'file.js'
    }, rule)
    if (warning) {
      warning.fix = stripAnsi(warning.fix)
    }
    return warning
  }
}
