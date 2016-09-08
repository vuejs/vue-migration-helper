'use strict'

var chalk = require('chalk')
var camelCase = require('lodash/camelCase')

module.exports = {
  pattern: /\b(v-el|v-ref):([\w-]+)\b/,
  warning: function (match, type, name) {
    return {
      reason: 'v-el and v-ref merged into ref attribute',
      fix: (
        'Update ' + chalk.red(match) + ' to ' +
        chalk.green('ref="' + camelCase(name) + '"')
      ),
      docsHash: 'v-el-and-v-ref'
    }
  }
}
