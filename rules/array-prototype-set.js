'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /([\w+\.]+?)\.\$set\s*?\((.+?)\)/,
  warning: function (match, array, setArgs) {
    return {
      reason: '',
      fix: (
        'Replace ' + chalk.red(match) + ' with ' +
        'Vue.set(' + array + ', ' + setArgs.trim() + ')'
      ),
      docsHash: 'Array-prototype-set'
    }
  }
}
