'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /(this|vm|self)\.\$interpolate\s*?\(\s*?["'`](.+?)["'`]\s*?\)/,
  warning: function (match, vm, property) {
    return {
      reason: 'vm.$interpolate has been removed, as it has no real use',
      fix: (
        'Replace ' + chalk.red(match) + ' with a solution using normal JavaScript'
      ),
      docsHash: 'vm-interpolate',
      type: 'js'
    }
  }
}
