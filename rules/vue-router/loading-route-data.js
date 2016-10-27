'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\$loadingRouteData/,
  warning: function (match) {
    return {
      reason: 'The same results can now be achieved with normal reactive properties, so it\'s been removed',
      fix: (
        'Replace ' + chalk.red('$loadingRouteData') + ' with a reactive property that you define (see the link below for an example)'
      ),
      docsHash: 'loadingRouteData',
      type: 'js'
    }
  }
}
