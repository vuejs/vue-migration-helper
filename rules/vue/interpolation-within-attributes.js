'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\b([\w-:@\.]+)="([^"=]*?)\{\{(.+?)\}\}([^"=]*?)"/,
  warning: function (match, attribute, prefixString, value, suffixString) {
    return {
      reason: 'Interpolation within attributes has been removed',
      fix: suffixString.indexOf('{{') === -1 && suffixString.indexOf('}}') === -1
        ? (
            'Update ' + chalk.red(match) + ' to ' +
            chalk.green(
              'v-bind:' + attribute + '="' +
              (prefixString.length
                ? '\'' + prefixString.replace('\'', '\\\'') + '\' + '
                : '') +
              value.trim() +
              (suffixString.length
                ? ' + \'' + suffixString.replace('\'', '\\\'') + '\''
                : '') +
              '"'
            )
          )
        : (
            'Update ' + chalk.red(match) + ' to ' +
            'use v-bind with a computed property'
          ),
      docsHash: 'Interpolation-within-Attributes',
      type: 'template'
    }
  }
}
