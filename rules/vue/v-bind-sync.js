'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /((?:v-bind)?:)([\w-]+)\.(sync)=(["][^"]+["]|['][^']+[']|\w+)/,
  warning: function (match, vBindPrefix, boundProp, modifier, value) {
    return {
      reason: 'v-bind.sync and v-bind.once have removed to enforce one-way down props, leaving side effects to more explicit component events',
      fix: (
        'Replace ' + chalk.red(match) + ' with ' +
        chalk.green(vBindPrefix + boundProp + '=' + value) +
        ', then $emit an event from the child component to trigger an update to ' + value.replace(/['"]/g, '') + ' in the parent'
      ),
      docsHash: 'v-bind-with-once-and-sync-Modifiers',
      type: 'template'
    }
  }
}
