'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /("vuex"\s*:\s*)"[^\d"]*?[^1-2]\.\d+\.\d+"/,
  warning: function (match, preVersion) {
    return {
      reason: 'Vuex 1.0 is the earliest supported version compatible with Vue 2.0',
      fix: (
        'Replace ' + chalk.red(match) + ' with ' +
        chalk.green(
          preVersion + '"^1.0.0"'
        ) +
        ', then run: npm install'
      ),
      docsHash: '',
      type: 'package.json'
    }
  }
}
