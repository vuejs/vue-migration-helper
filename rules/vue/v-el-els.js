'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /(\w+)\.\$els(\.\w+|\[.+?\])?/,
  warning: function (match, vm, el) {
    return {
      reason: 'v-el and v-ref merged into ref attribute',
      fix: (
        'Update ' + chalk.red(match) + ' to ' +
        chalk.green(vm + '.$refs' + (el || ''))
      ),
      docsHash: 'v-el-and-v-ref',
      type: 'js'
    }
  }
}
