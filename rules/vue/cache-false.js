'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\bcache\s*?:\s*?false\b/,
  warning: function (match) {
    return {
      reason: 'The cache option on computed properties has been deprecated, as it\'s better to simply use a method instead',
      fix: 'Refactor the computed property into a method',
      docsHash: 'cache-false',
      type: 'js'
    }
  }
}
