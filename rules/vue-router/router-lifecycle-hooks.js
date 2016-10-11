'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\bdata\s*?(?::|\()/,
  warning: function (match, hook) {
    return {
      reason: 'The data route lifecycle hook has been deprecated',
      fix: (
        'Replace ' + chalk.red('data') + ' with ' +
        (replacementHook.indexOf(' ') === -1
          ? chalk.green(replacementHook)
          : replacementHook) + ' ' +
        (info || '')
      ),
      docsHash: 'data-deprecated'
    }
  }
}
