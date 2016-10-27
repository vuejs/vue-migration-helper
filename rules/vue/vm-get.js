'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /(this|vm|self)\.\$get\s*?\(\s*?["'`](.+?)["'`]\s*?\)/,
  warning: function (match, vm, property) {
    return {
      reason: 'vm.$get has been removed, in favor of simply accessing properties the normal JavaScript way',
      fix: (
        'Replace ' + chalk.red(match) + ' with ' +
        chalk.green(
          vm + '.' + property
        )
      ),
      docsHash: 'vm-get',
      type: 'js'
    }
  }
}
