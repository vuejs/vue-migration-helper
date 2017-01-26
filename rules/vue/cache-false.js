'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\bcache\s*?:\s*?false\b/,
  warning: function (match) {
    return {
      reason: 'The cache option has been deprecated, as it can be used methods',
      fix: ('Replace the ' + chalk.red(match) + ' option with your component method'),
      docsHash: 'cache-false',
      type: 'js'
    }
  }
}
