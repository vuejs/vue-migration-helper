'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /(?:this|vm|self)\.\$set\s*?\((.+?)\)/,
  warning: function (match, args) {
    return {
      reason: 'vm.$set has been deprecated in favor of Vue.set',
      fix: (
        'Replace ' + chalk.red(match) + ' with ' +
        chalk.green(
          'Vue.set(' + args + ')'
        )
      ),
      docsHash: 'vm-set'
    }
  }
}

