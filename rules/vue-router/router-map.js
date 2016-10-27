'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\b(router\s*?\.\s*?map)\s*?\(/,
  warning: function (match, routerMap) {
    return {
      reason: 'Routes are now defined as an array on a routes option at router instantiation',
      fix: (
        'Replace ' + chalk.red(routerMap) + ' with ' +
        'an array on the new routes option (see link below for details)'
      ),
      docsHash: 'router-map',
      type: 'js'
    }
  }
}
