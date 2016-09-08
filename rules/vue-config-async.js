'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /Vue\.config\.async/,
  warning: function (match) {
    return {
      reason: 'Deprecated, as async is required for performance',
      fix: 'Delete references to ' + chalk.red('Vue.config.async'),
      docsHash: 'Vue-config-async'
    }
  }
}
