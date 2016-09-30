'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\b(router\s*?\.\s*?on)\s*?\(/,
  warning: function (match, routerOn) {
    return {
      reason: 'It\'s now recommended to simply re',
      fix: (
        'Replace ' + chalk.red(routerOn) + ' with ' +
        'a route that\'s dynamically added to the routes array (see link below for details)'
      ),
      docsHash: 'router-on-deprecated'
    }
  }
}
