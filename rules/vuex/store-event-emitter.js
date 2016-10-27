'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\bstore\s*.\s*(on|emit|off)\b/,
  warning: function (match, method) {
    var eventBus = chalk.green('eventBus.' + method) + ', creating the eventBus from an empty Vue instance'
    var replacement = method === 'on'
      ? chalk.green('store.subscribe') + ' or ' + eventBus
      : eventBus
    return {
      reason: 'The store no longer exposes an event emitter interface',
      fix: (
        'Replace ' + chalk.red(match) + ' with ' + replacement + ' (see the link below for details)'
      ),
      docsHash: 'Store’s-Event-Emitter',
      type: 'js'
    }
  }
}
