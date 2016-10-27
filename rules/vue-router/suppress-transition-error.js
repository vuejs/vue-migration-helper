'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\bsuppressTransitionError\b/,
  warning: function (match) {
    return {
      reason: 'Removed due to hooks simplification - if you really must suppress transition errors, you can use JavaScript\'s try-catch instead',
      fix: (
        'Remove the ' + chalk.red('suppressTransitionError') + ' option'
      ),
      docsHash: 'suppressTransitionError',
      type: 'js'
    }
  }
}
