'use strict'

var chalk = require('chalk')
var camelCase = require('lodash.camelcase')

module.exports = {
  pattern: /\b(v-el|v-ref):([\w-]+)/,
  warning: function (match, type, name) {
    return {
      reason: 'v-el and v-ref merged into ref attribute',
      fix: (
        'Update ' + chalk.red(match) + ' to ' +
        chalk.green('ref="' + camelCase(name) + '"')
      ),
      docsHash: 'v-el-and-v-ref',
      type: 'template'
    }
  }
}
