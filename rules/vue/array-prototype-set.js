'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /([\w+\.]+?)\.\$set\s*?\(([\w\s\.\[\]]+?),([^,]+?)\)/,
  warning: function (match, array, indexArg, newValueArg) {
    return {
      reason: 'Array extensions for the reactivity system have been removed',
      fix: (
        'Replace ' + chalk.red(match) + ' with ' +
        chalk.green(
          'Vue.set(' +
            array + ', ' +
            indexArg.trim() + ', ' +
            newValueArg.trim() +
          ')'
        )
      ),
      docsHash: 'Array-prototype-set',
      type: 'js'
    }
  }
}

