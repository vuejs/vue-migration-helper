'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /Vue\.config\.debug/,
  warning: function (match) {
    return {
      reason: 'Deprecated, since warnings come with stack traces by default now',
      fix: 'Delete references to ' + chalk.red('Vue.config.debug'),
      docsHash: 'Vue-config-debug'
    }
  }
}
