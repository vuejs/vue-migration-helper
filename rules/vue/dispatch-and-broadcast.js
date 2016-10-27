'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /(\w+)\.\$(?:dispatch|broadcast)\s*?\(.+?\)/,
  warning: function (match) {
    return {
      reason: '$dispatch and $broadcast have been removed because the pattern doesn\'t scale well',
      fix: 'Replace ' + chalk.red(match) + ' to use a global event bus or vuex (see link below for implementation details)',
      docsHash: 'dispatch-and-broadcast',
      type: 'js'
    }
  }
}
