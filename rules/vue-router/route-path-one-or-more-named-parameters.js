'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /([`"'][^`"']*?\/)\*([^`"'\/\s]+)([^`"']*?[`"'])/,
  warning: function (match, pre, param, post) {
    return {
      reason: 'The syntax for route matching has changed since Vue Router now uses path-to-regexp under the hood',
      fix: (
        'Replace ' + chalk.red(match) + ' with ' +
        chalk.green(pre + ':' + param + '+' + post)
      ),
      docsHash: 'One-or-More-Named-Parameters',
      type: 'js'
    }
  }
}
