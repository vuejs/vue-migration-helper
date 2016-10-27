'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\bcanReuse\s*?:/,
  warning: function (match) {
    return {
      reason: 'There\'s no longer a use case for canReuse in the new Vue Router',
      fix: (
        'Remove the ' + chalk.red('canReuse') + ' option'
      ),
      docsHash: 'canReuse-false',
      type: 'js'
    }
  }
}
