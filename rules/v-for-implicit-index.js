'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\$index/,
  warning: function (match) {
    return {
      reason: '$index has been deprecated - you must explicity declare one in the v-for',
      fix: (
        'Rename ' + chalk.red(match) + ' to ' +
        chalk.green('index') + ' and explicity declare it in v-for'
      ),
      docsHash: 'v-for-Implicit-index'
    }
  }
}
