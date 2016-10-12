'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /("vue-loader"\s*:\s*)"[^\d"]*?[^9]\.\d+\.\d+"/,
  warning: function (match, preVersion) {
    return {
      reason: 'If you are using pre-9.0 vue-loader through NPM, you have to update it in your package.json file',
      fix: (
        'Replace ' + chalk.red(match) + ' with ' +
        chalk.green(
          preVersion + '"^9.0.0"'
        ) +
        ', then run: npm install'
      ),
      docsHash: ''
    }
  }
}
