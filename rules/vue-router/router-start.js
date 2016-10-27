'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\b(router\s*?\.\s*?start)\s*?\(/,
  warning: function (match, routerStart) {
    return {
      reason: 'Starting an app with routing no longer requires a special method - the router can simply be passed to the root Vue instance as option',
      fix: (
        'Replace ' + chalk.red(routerStart) + ' with ' +
        chalk.green('router: router') +
        ' on your root Vue instance (see link below for details)'
      ),
      docsHash: 'router-start',
      type: 'js'
    }
  }
}
