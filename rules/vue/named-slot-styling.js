'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /.*\[\s*slot\s*=.+?\][^\{]*/,
  warning: function (match) {
    return {
      reason: 'Content inserted via named <slot> no longer preserves the slot attribute',
      fix: 'Replace ' + chalk.red(match.trim()) + ' with a styled wrapper element or, in advanced use cases, modify the inserted content programmatically using a render function',
      docsHash: 'slot-Attribute-Styling',
      type: 'template'
    }
  }
}
