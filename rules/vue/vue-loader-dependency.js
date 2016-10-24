'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /("vue-loader"\s*:\s*)"[^\d"]*?[^9]\.\d+\.\d+"/,
  warning: function (match, preVersion) {
    return {
      reason: 'vue-loader 9.0 is the earliest supported version compatible with Vue 2.0',
      fix: (
        'Replace ' + chalk.red(match) + ' with ' +
        chalk.green(
          preVersion + '"^9.0.0"'
        ) +
        ', then run: npm install'
      ),
      docsHash: '',
      type: 'package.json'
    }
  }
}
