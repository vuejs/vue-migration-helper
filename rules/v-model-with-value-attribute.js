'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /<[\w-]+\s+.*?v-model[\.\w-:]*=["'](.+?)["']\s+.*?(value=["'](.+?)["'])\s*.*?>/,
  warning: function (match, vModelValue, valueAttr, valueValue) {
    return {
      reason: 'v-model attribute params have been removed in favor of simpler modifier syntax',
      fix: (
        'Delete ' + chalk.red(valueAttr) + ' and ' +
        'instead update the initial state of ' +
        chalk.green(vModelValue) + ' to ' +
        chalk.green(
          '\'' + valueValue.replace(/['"]/g, '') + '\''
        )
      ),
      docsHash: 'v-model-with-initial-value'
    }
  }
}
