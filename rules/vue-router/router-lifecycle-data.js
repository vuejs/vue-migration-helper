'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /^\s*data\s*?(?::\s*\(?\s*[\w,\s]+\)?\s*=>|\(\s*\w+)/,
  warning: function (match, hook) {
    return {
      reason: 'The data route lifecycle hook has been deprecated',
      fix: (
        'Replace the ' + chalk.red('data') + ' route hook with a watcher that reacts to $route changes'
      ),
      docsHash: 'data-deprecated',
      type: 'js'
    }
  }
}
