'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /(\.([\w-]+)-leave)[^\w-]/,
  warning: function (match, cssClass, name) {
    return {
      reason: 'v-leave class now defines a starting state for leave transitions, rather than the ending state',
      fix: (
        'Replace ' + chalk.red(cssClass) + ' with ' +
        chalk.green('.' + name + '-leave-active') +
        ' (if it\'s left over from Vue 1.x)'
      ),
      docsHash: 'Transitions',
      type: 'style'
    }
  }
}
