'use strict'
var chalk = require('chalk')

module.exports = function (filesChecking) {
  Promise.all(filesChecking)
    .then(function (files) {
      var filesCount = filesChecking.length

      var filesWithWarnings = files.filter(function (fileWarnings) {
        return fileWarnings > 0
      }).length

      var warningsCount = files.reduce(function (totalWarnings, fileWarnings) {
        return totalWarnings + fileWarnings
      })

      // Display stats
      console.log()
      if (filesWithWarnings === 0) {
        console.log(chalk.green(
          '✓ Project\'s files don\'t use deprecated patterns.'
        ))
      } else {
        console.log(chalk.white.bgRed(
          ' ✖ ' + warningsCount + ' deprecated patterns detected in ' + filesWithWarnings + ' out of ' + filesCount + ' project\'s files. '
        ))
      }
    })
}
