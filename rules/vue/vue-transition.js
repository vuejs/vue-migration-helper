'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /Vue\.transition\s*\(\s*(['"`].+['"`])/,
  warning: function (match, name) {
    return {
      reason: 'Vue.transition has been removed, as the new transition system uses components for reusable transitions',
      fix: (
        'Replace ' + chalk.red('Vue.transition(' + name + ')') + ' with a component that uses the new ' +
        chalk.green('<transition>') + ' or ' +
        chalk.green('<transition-group>') +
        ' element as its root'
      ),
      docsHash: 'Vue-transition-for-Reusable-Transitions',
      type: 'js'
    }
  }
}
