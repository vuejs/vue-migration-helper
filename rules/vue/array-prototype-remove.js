'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /([\w+\.]+?)\.\$remove\s*?\(([\w\.]+?)\)/,
  warning: function (match, array, itemToRemove) {
    return {
      reason: 'Array extensions for the reactivity system have been removed',
      fix: (
        'Replace ' + chalk.red(match) + ' with ' +
        chalk.green(
          'var index = ' + array + '.indexOf(' + itemToRemove.trim() + '); ' +
          array + '.splice(index, 1)'
        )
      ),
      docsHash: 'Array-prototype-remove',
      type: 'js'
    }
  }
}
