'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\bsaveScrollPosition\b/,
  warning: function (match) {
    return {
      reason: 'The binary nature of saveScrollPosition wasn\'t sufficient for many use cases, but the new scrollBehavior option allows scroll behavior to be fully customized',
      fix: (
        'Replace ' + chalk.red('saveScrollPosition') + ' with the new ' +
        chalk.green('scrollBehavior') + ' option, which takes a function (see the link below for examples)'
      ),
      docsHash: 'saveScrollPosition',
      type: 'js'
    }
  }
}
