'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /((?:v-bind)?:)([\w-]+)\.(once)=(["][^"]+["]|['][^']+[']|\w+)/,
  warning: function (match, vBindPrefix, boundProp, modifier, value) {
    return {
      reason: 'v-bind.sync and v-bind.once have removed to enforce one-way down props, leaving side effects to more explicit component events',
      fix: (
        'Replace ' + chalk.red(match) + ' with ' +
        chalk.green(vBindPrefix + boundProp + '=' + value) +
        ', then make ' + boundProp + ' the initial value of a data property'
      ),
      docsHash: 'v-bind-with-once-and-sync-Modifiers',
      type: 'template'
    }
  }
}
