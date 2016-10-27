'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\{\{\{\s*?(.+?)\s*?\}\}\}/,
  warning: function (match, interpolationContents) {
    return {
      reason: 'HTML interpolation with {{{ }}} has been removed',
      fix: (
        'Replace ' + chalk.red(match) + ' with ' +
        chalk.green('v-html="' + interpolationContents.trim() + '"') +
        ' on a containing element'
      ),
      docsHash: 'HTML-Interpolation',
      type: 'template'
    }
  }
}
