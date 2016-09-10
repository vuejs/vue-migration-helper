'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\s((?:v-|@|:)[\w\.:-]+=(?:"[^"]+?\|[^"]+?"|'[^']+?\|[^']+?'))/,
  warning: function (match, directive) {
    return {
      reason: 'Filters can now only be used inside text interpolations, e.g. {{ date | formatDate(\'YY-MM-DD\') }}',
      fix: (
        'Remove filter from ' + chalk.red(directive)
      ),
      docsHash: 'Filters-within-Directives'
    }
  }
}
