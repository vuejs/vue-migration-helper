'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /(this|vm|self)\.\$log\s*?\(\s*?["'`](.+?)["'`]\s*?\)/,
  warning: function (match, vm, property) {
    return {
      reason: 'vm.$log has been deprecated, because the Vue Devtools offer a better debugging experience',
      fix: (
        'Delete ' + chalk.red(match) + ' and install the Vue Devtools instead: ' + chalk.underline.green('https://github.com/vuejs/vue-devtools')
      ),
      docsHash: 'vm-log-deprecated',
      type: 'js'
    }
  }
}
