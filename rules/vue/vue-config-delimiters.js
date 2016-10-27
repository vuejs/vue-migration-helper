'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /Vue\.config\.delimiters/,
  warning: function (match) {
    return {
      reason: 'Delimiters are now a component-level option',
      fix: 'Refactor ' + chalk.red('Vue.config.delimiters') + ' to its component-level equivalent',
      docsHash: 'Vue-config-delimiters',
      type: 'js'
    }
  }
}
