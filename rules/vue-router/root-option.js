'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\broot\s*?:\s*?['"`]\//,
  warning: function (match) {
    return {
      reason: 'Renamed to base for consistency with the HTML <base> element',
      fix: (
        'Rename the ' + chalk.red('root') + ' option to ' +
        chalk.green('base')
      ),
      docsHash: 'root',
      type: 'js'
    }
  }
}
