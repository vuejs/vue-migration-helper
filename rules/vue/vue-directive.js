'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /Vue\.directive\s*\(\s*(['"`].+['"`])/,
  warning: function (match, name) {
    return {
      reason: 'Directives have been vastly reduced in scope and components are preferred in most use cases',
      fix: (
        'Check ' + chalk.red('Vue.directive(' + name + ')') + ' to make sure its syntax has been updated and for anything beyond simple DOM manipulations, refactor to a component'
      ),
      docsHash: 'Custom-Directives',
      type: 'js'
    }
  }
}
