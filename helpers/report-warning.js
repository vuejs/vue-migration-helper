'use strict'

var chalk = require('chalk')
var migrationGuideUrlFor = require('./migration-guide-url-for')
var parentFolderNameFor = require('./parent-folder-name-for')

var warningCount = 0
module.exports = function (fileData, warning, rule) {
  warningCount++

  var library = parentFolderNameFor(rule.file)

  console.log()
  console.log(chalk.yellow(
    warningCount + '. ' + warning.fix
  ))
  console.log(chalk.blue('  Line ' + fileData.lineNum + ': ' + fileData.file))
  console.log(chalk.cyan.dim('  Reason: ' + warning.reason))
  console.log(chalk.cyan.dim(
    '  More info: ' +
    chalk.underline(migrationGuideUrlFor(library) + '#' + warning.docsHash)
  ))
}
