'use strict'

var chalk = require('chalk')
var migrationGuideUrlFor = require('./migration-guide-url-for')

module.exports = function (deprecationsFound) {
  if (!deprecationsFound) {
    console.log()
    console.log(chalk.green(
      'No obsolete syntax was detected. Well done!'
    ))
    console.log()
    console.log(chalk.yellow(
      'Note however that only about 80% of API changes are detectable with this utility. See the migration guide for the rest:'
    ))
    console.log()
    console.log(chalk.blue.underline(migrationGuideUrlFor('vue')))
  }
}
