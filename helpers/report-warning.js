'use strict'

var chalk = require('chalk')

module.exports = function (fileData, warning) {
  if (process.env.NODE_ENV === 'test') return

  console.log()
  console.log(chalk.yellow(warning.fix))
  console.log(chalk.blue('  Line ' + fileData.lineNum + ': ' + fileData.file))
  console.log(chalk.cyan.dim('  Reason: ' + warning.reason))
  console.log(chalk.cyan.dim(
    '  More info: ' +
    chalk.underline('http://rc.vuejs.org/guide/migration.html#' + warning.docsHash)
  ))
}
