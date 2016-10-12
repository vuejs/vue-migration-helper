'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /("vuex"\s*:\s*)"[^\d"]*?[^1-2]\.\d+\.\d+"/,
  warning: function (match, preVersion) {
    return {
      reason: 'If you are using pre-1.0 vuex through NPM, you have to update it in your package.json file',
      fix: (
        'Replace ' + chalk.red(match) + ' with ' +
        chalk.green(
          preVersion + '"^1.0.0"'
        ) +
        ', then run: npm install'
      ),
      docsHash: ''
    }
  }
}
