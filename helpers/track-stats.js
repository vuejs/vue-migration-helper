'use strict'
var chalk = require('chalk')

var fileNum = 0
var deprecatedFilesCount = 0
var errorsCount = 0
module.exports = function (fileErrors, filesLenght) {
  fileNum++
  if (fileErrors > 0) {
    deprecatedFilesCount++
    errorsCount += fileErrors
  }

  // Display stats if it's the last file to being checked.
  if (fileNum === filesLenght) {
    console.log()
    if (deprecatedFilesCount === 0) {
      console.log(chalk.green(
        '✓ Project\'s files don\'t use deprecated patterns.'
      ))
    } else {
      console.log(chalk.white.bgRed(
        ' ✖ ' + errorsCount + ' deprecated patterns detected in ' + deprecatedFilesCount + ' out of ' + filesLenght + ' project\'s files. '
      ))
    }
  }
}
