'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\b(router\s*?\.\s*?redirect)\s*?\(/,
  warning: function (match, routerRedirect) {
    return {
      reason: 'Redirects have been moved to an option on route definitions to improve config organization',
      fix: (
        'Replace ' + chalk.red(routerRedirect) + ' with ' +
        'a redirect option in a route definition (see link below for details)'
      ),
      docsHash: 'router-redirect',
      type: 'js'
    }
  }
}
