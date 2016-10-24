'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /(this|vm|self)\.\$delete\s*?\(\s*([^,\)]+?)\s*\)/,
  warning: function (match, vm, key) {
    const property = /['"`]\w+['"`]/.test(key)
      ? '.' + key.replace(/['"`]/g, '')
      : '[' + key + ']'
    return {
      reason: 'vm.$delete is now just an alias for Vue.delete and it is no longer possible to delete top-level reactive properties',
      fix: (
        'Replace ' + chalk.red(match) + ' with ' +
        chalk.green(vm + property + ' = null')
      ),
      docsHash: 'vm-delete',
      type: 'js'
    }
  }
}
