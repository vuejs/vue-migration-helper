'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /<[\w-]+\s+.*?(v-model[\.\w-:]*)=["'\b](.+?)["'\b].*\s(lazy|number)[\s>].*?>?/,
  warning: function (match, vModelAttr, vModelValue, param) {
    return {
      reason: 'v-model attribute params have been removed in favor of simpler modifier syntax',
      fix: (
        'Refactor ' + chalk.red(param) + ' to ' +
        'a v-model modifier: ' +
        chalk.green(
          vModelAttr + '.' + param + '="' + vModelValue + '"'
        )
      ),
      docsHash: 'v-model-with-lazy-or-number-Param-Attributes',
      type: 'template'
    }
  }
}
