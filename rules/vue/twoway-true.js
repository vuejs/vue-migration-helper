'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\btwoWay\s*?:\s*?true\b/,
  warning: function (match) {
    return {
      reason: 'Two-way prop binding has been removed in favor of more explicit event-driven communication between parent and child',
      fix: (
        'Delete ' + chalk.red(match) + ', then $emit an event from the child component to trigger an update to the prop in the parent'
      ),
      docsHash: 'twoWay-Prop-Option',
      type: 'js'
    }
  }
}
