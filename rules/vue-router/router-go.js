'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\b(router\s*\.\s*)go\s*\(\s*['"`\{]/,
  warning: function (match, routerDot) {
    return {
      reason: 'For consistency with the HTML5 History API, router.go is now only used for back/forward navigation, while router.push is used to navigate to a specific page',
      fix: (
        'Replace ' + chalk.red(routerDot + 'go') + ' with ' +
        chalk.green(routerDot + 'push')
      ),
      docsHash: 'router-go',
      type: 'js'
    }
  }
}
