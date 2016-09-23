'use strict'

var chalk = require('chalk')
var migrationGuideUrl = require('../config/migration-guide-url')

var warningCount = 0
module.exports = function (fileData, warning) {
  if (process.env.NODE_ENV === 'test') return

  warningCount++

  console.log()
  console.log(chalk.yellow(
    warningCount + '. ' + warning.fix
  ))
  console.log(chalk.blue('  Line ' + fileData.lineNum + ': ' + fileData.file))
  console.log(chalk.cyan.dim('  Reason: ' + warning.reason))
  console.log(chalk.cyan.dim(
    '  More info: ' +
    chalk.underline(migrationGuideUrl + '#' + warning.docsHash)
  ))
}
