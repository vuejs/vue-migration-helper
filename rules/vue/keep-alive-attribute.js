'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /<[\w-]+\s+.*?\bkeep-alive\b.*?>/,
  warning: function (match) {
    return {
      reason: 'keep-alive is now a wrapper element, rather than an attribute',
      fix: (
        'Refactor ' + chalk.red('keep-alive') + ' attribute ' +
        'to a ' + chalk.green('<keep-alive></keep-alive>') + ' wrapper component'
      ),
      docsHash: 'keep-alive-Attribute',
      type: 'template'
    }
  }
}
