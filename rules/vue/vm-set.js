'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /(this|vm|self)\.\$set\s*?\(\s*['"`]([\w\.]+?)\.(\w+)['"`]\s*,\s*([^,]+?)\s*\)/,
  warning: function (match, vm, objectPath, leafProperty, value) {
    return {
      reason: 'vm.$set is now just an alias for Vue.set',
      fix: (
        'Replace ' + chalk.red(match) + ' with ' +
        chalk.green(
          vm + '.$set(' +
            vm + '.' + objectPath + ', ' +
            '\'' + leafProperty + '\'' + ', ' +
            value +
          ')'
        )
      ),
      docsHash: 'vm-set',
      type: 'js'
    }
  }
}
