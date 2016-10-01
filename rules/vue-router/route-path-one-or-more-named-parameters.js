'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /([`"'][^`"']*?\/)\*([^`"'\/]+)([^`"']*?[`"'])/,
  warning: function (match, pre, param, post) {
    return {
      reason: '',
      fix: (
        'Replace ' + chalk.red(match) + ' with ' +
        chalk.green(pre + ':' + param + '+' + post)
      ),
      docsHash: 'One-or-More-Named-Parameters'
    }
  }
}
