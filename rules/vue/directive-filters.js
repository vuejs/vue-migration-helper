'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\s((?:v-|@|:)[\w\.:-]+=(?:"[^"\|]+?\|[^\|][^"]+?"|'[^'\|]+?\|[^\|][^']+?'))/,
  warning: function (match, directive) {
    return {
      reason: 'Filters can now only be used inside text interpolations, e.g. {{ date | formatDate(\'YY-MM-DD\') }}',
      fix: (
        'Replace filtered value in ' + chalk.red(directive) + ' with a method or computed property'
      ),
      docsHash: 'Filters-Outside-Text-Interpolations',
      type: 'template'
    }
  }
}
