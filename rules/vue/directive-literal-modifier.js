'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\b(v-[\w-]+)([\w-\.:]*?)\.literal([\w-\.]*?)="(.+?)"/,
  warning: function (match, name, preLiteralStuff, postLiteralStuff, value) {
    return {
      reason: 'Directives have been vastly simplified and no longer include the literal modifier',
      fix: (
        'Replace ' + chalk.red(match) + ' with ' +
        chalk.green(name + preLiteralStuff + postLiteralStuff + '="\'' + value + '\'"')
      ),
      docsHash: 'Directive-literal-Modifier',
      type: 'template'
    }
  }
}
