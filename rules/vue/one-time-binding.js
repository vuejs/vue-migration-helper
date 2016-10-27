'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\{\{\s*?\*(.+?)\}\}/,
  warning: function (match, binding) {
    return {
      reason: 'One-way bindings have been replaced by a new v-once directive',
      fix: (
        'Replace ' + chalk.red(match) + ' with ' +
        chalk.green('v-once="' + binding.trim() + '"') +
        ' on a containing element'
      ),
      docsHash: 'One-Time-Bindings',
      type: 'template'
    }
  }
}
