'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\bsubRoutes\b/,
  warning: function (match) {
    return {
      reason: 'subRoutes has been renamed to children for consistency within Vue and with other routing libraries',
      fix: (
        'Replace ' + chalk.red('subRoutes') + ' with ' +
        chalk.green('children') +
        ' and update its routes to the new array syntax'
      ),
      docsHash: 'subRoutes',
      type: 'js'
    }
  }
}
