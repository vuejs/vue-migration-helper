'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\btransitionOnLoad\b/,
  warning: function (match) {
    return {
      reason: 'This option is no longer necessary now that Vue\'s transition system has explicit appear transition control',
      fix: (
        'Remove the ' + chalk.red('transitionOnLoad') + ' option'
      ),
      docsHash: 'transitionOnLoad',
      type: 'js'
    }
  }
}
