'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /<[^>]+\b(?:v-else[^>]+?\b(v-show=["'][^\[\.]+["'])|(v-show=["'][^\[\.]+["'])[^>]+?v-else)[^>]*?>/,
  warning: function (match, vShowAfter, vShowBefore) {
    return {
      reason: 'When used with v-show, a negation expression must be used instead of v-else, e.g. v-if="!foo"',
      fix: (
        'Replace ' + chalk.red('v-else') + ' with a ' +
        chalk.green('v-if') + ' negation expression'
      ),
      docsHash: 'v-else-with-v-show',
      type: 'template'
    }
  }
}
