'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\bdebounce=['"]?\d+['"]?/,
  warning: function (match) {
    return {
      reason: 'debounce was quite limited and reinvented a utility function better maintained in libraries such as lodash and underscore',
      fix: (
        'Delete ' + chalk.red(match) + ' and wrap the expensive operation(s) you want to throttle with lodash\'s debounce or throttle functions (see the link below for an example)'
      ),
      docsHash: 'v-model-with-debounce',
      type: 'template'
    }
  }
}
