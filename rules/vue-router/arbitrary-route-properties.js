'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /[\s\.\$](route\s*\.\s*)((?!(?:path|components?|instances|name|parent|redirect|matchAs|beforeEnter|meta|query|params|matched|router|subRoutes|fullPath))\w+)/,
  warning: function (match, routeDot, property) {
    return {
      reason: 'Arbitrary route properties must now be scoped under the new meta property, to avoid conflicts with future features',
      fix: (
        'Replace ' + chalk.red(match.slice(1)) + ' with ' +
        chalk.green(routeDot + 'meta.' + property) +
        ', then also update the route option to be scoped under meta'
      ),
      docsHash: 'Arbitrary-Route-Properties',
      type: 'js'
    }
  }
}
