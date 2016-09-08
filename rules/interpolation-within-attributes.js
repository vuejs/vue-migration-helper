'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /([\w-:@\.]+)="(.*?)\{\{(.+?)\}\}(.*?)"/,
  warning: function (match, attribute, prefixString, value, suffixString) {
    return {
      reason: 'Interpolation within attributes has been deprecated',
      fix: (
        'Update ' + chalk.red(match) + ' to ' +
        chalk.green(
          'v-bind:' + attribute + '="' +
          (prefixString.length
            ? '\'' + prefixString + '\' + '
            : '') +
          value.trim() + '"' +
          (suffixString.length
            ? ' + \'' + suffixString + '\''
            : '')
        )
      ),
      docsHash: 'Interpolation-within-Attributes'
    }
  }
}
