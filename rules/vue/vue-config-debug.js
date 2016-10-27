'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /Vue\.config\.debug/,
  warning: function (match) {
    return {
      reason: 'Warnings come with stack traces by default now, making this option redundant',
      fix: 'Delete references to ' + chalk.red('Vue.config.debug'),
      docsHash: 'Vue-config-debug',
      type: 'js'
    }
  }
}
