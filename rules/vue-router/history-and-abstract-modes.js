'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\b(history|abstract)(\s*?):(\s*?)true\b/,
  warning: function (match, mode, spaceBeforeColon, spaceAfterColon) {
    return {
      reason: 'In vue-router, all modes (e.g. history, hash, abstract) are now set through the new mode option',
      fix: (
        'Replace ' + chalk.red(match) + ' with ' +
        chalk.green('mode' + spaceBeforeColon + ':' + spaceAfterColon + '\'' + mode + '\'')
      ),
      docsHash: 'replace-false-deprecated'
    }
  }
}
