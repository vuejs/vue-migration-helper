'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\breplace\s*?:\s*?false\b/,
  warning: function (match) {
    return {
      reason: 'The replace option has been removed, as it provides too little convenience',
      fix: (
        'Delete the ' + chalk.red(match) + ' option and instead wrap your root component with an element similar to the one you\'re replacing, e.g. ' +
        chalk.green('el: \'#app\'') +
        ' with ' +
        chalk.green('template: \'<div id="app"> ... </div>\'')
      ),
      docsHash: 'replace-false',
      type: 'js'
    }
  }
}
