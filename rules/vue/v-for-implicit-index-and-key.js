'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\$(index|key)\b/,
  warning: function (match) {
    const exampleVFor = match === '$index'
      ? 'v-for="(item, index) in items"'
      : 'v-for="(value, key) in object"'
    return {
      reason: match + ' has been removed to avoid implicitly defined (i.e. "magic") variables',
      fix: (
        'Rename ' + chalk.red(match) + ' to ' +
        chalk.green(match.slice(1)) + ' and explicity declare it (e.g. ' + exampleVFor + ')'
      ),
      docsHash: 'index-and-key',
      type: 'template'
    }
  }
}
