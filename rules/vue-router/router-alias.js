'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\b(router\s*?\.\s*?alias)\s*?\(/,
  warning: function (match, routerAlias) {
    return {
      reason: 'Aliases have been moved to an option on route definitions to improve config organization',
      fix: (
        'Replace ' + chalk.red(routerAlias) + ' with ' +
        'an alias option in a route definition (see link below for details)'
      ),
      docsHash: 'router-alias',
      type: 'js'
    }
  }
}
