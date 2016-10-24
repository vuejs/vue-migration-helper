'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /("vue"\s*:\s*)"[^\d"]*?[^2]\.\d+\.\d+"/,
  warning: function (match, preVersion) {
    return {
      reason: 'If you are using pre-2.0 Vue through NPM, you have to update it in your package.json file',
      fix: (
        'Replace ' + chalk.red(match) + ' with ' +
        chalk.green(
          preVersion + '"^2.0.0"'
        ) +
        ', then run: npm install'
      ),
      docsHash: '',
      type: 'package.json'
    }
  }
}
