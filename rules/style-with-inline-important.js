'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /(?:v-bind)?:style=["']\s*?\{.+?!important.*?\}\s*?["']/,
  warning: function (match) {
    return {
      reason: 'Bound styles no longer support inline !important',
      fix: (
        'Remove !important from ' + chalk.red(match)
      ),
      docsHash: 'Bound-style-Attribute-with-Inline-important'
    }
  }
}
