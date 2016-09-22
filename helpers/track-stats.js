'use strict'
var chalk = require('chalk')

module.exports = function (proms) {
  Promise.all(proms)
    .then(function (data) {
      var allFiles = proms.length
      var filesWithErr = data.filter(function (x) {
        return x > 0
      }).length

      var errCount = data.reduce(function (total, x) {
        return total + x
      })

      // Display stats
      console.log()
      if (filesWithErr === 0) {
        console.log(chalk.green(
          '✓ Project\'s files don\'t use deprecated patterns.'
        ))
      } else {
        console.log(chalk.white.bgRed(
          ' ✖ ' + errCount + ' deprecated patterns detected in ' + filesWithErr + ' out of ' + allFiles + ' project\'s files. '
        ))
      }
    })
}
