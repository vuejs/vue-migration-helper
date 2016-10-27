'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /Vue\.config\.unsafeDelimiters/,
  warning: function (match) {
    return {
      reason: 'Unsafe interpolation has been removed',
      fix: 'Delete ' + chalk.red('Vue.config.unsafeDelimiters') + ' and replace all instances of unsafe interpolations with ' + chalk.green('v-html'),
      docsHash: 'Vue-config-unsafeDelimiters',
      type: 'js'
    }
  }
}
