'use strict'

var chalk = require('chalk')
var migrationGuideUrl = require('../config/migration-guide-url')

module.exports = function (deprecationsFound) {
  if (!deprecationsFound) {
    console.log()
    console.log(chalk.green(
      'No deprecated patterns detected. Well done!'
    ))
    console.log()
    console.log(chalk.yellow(
      'Note however that only about 80% of deprecations are detectable with this utility. See the migration guide for the rest:'
    ))
    console.log()
    console.log(chalk.blue.underline(migrationGuideUrl))
  }
}
