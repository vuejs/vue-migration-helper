'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\b([\w-:@\.]+)=\{\{(.+?)\}\}/,
  warning: function (match, attribute, value) {
    return {
      reason: 'Interpolation within attributes has been removed',
      fix: (
        'Update ' + chalk.red(match) + ' to ' +
        chalk.green(
          'v-bind:' + attribute + '="' +
          value.trim() +
          '"'
        )
      ),
      docsHash: 'Interpolation-within-Attributes',
      type: 'template'
    }
  }
}
