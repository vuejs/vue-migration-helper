'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\bsubroutes(\s*?):/,
  warning: function (match, spaceBeforeColon) {
    return {
      reason: 'subroutes has been renamed to children for consistency within Vue and with other routing libraries',
      fix: (
        'Replace ' + chalk.red(match) + ' with ' +
        chalk.green('children' + spaceBeforeColon + ':') +
        ' and update its routes to the new array syntax'
      ),
      docsHash: 'subroutes-deprecated'
    }
  }
}
