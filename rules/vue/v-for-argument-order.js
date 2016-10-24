'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\bv-for="\(([ijk]|in?d?e?x?)\s*?,\s*?(\w+)\).+?"/,
  warning: function (match, indexVar, itemVar) {
    return {
      reason: 'Argument order for v-for has been updated to match JavaScript conventions',
      fix: (
        'Switch argument order in ' + chalk.red(match) + ' to ' +
        chalk.green('(' + itemVar + ', ' + indexVar + ')')
      ),
      docsHash: 'v-for-Argument-Order-for-Arrays',
      type: 'template'
    }
  }
}
