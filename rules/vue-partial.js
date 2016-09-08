'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /Vue\.partial\(\s*?(['"`].+?['"`])/,
  warning: function (match, name) {
    return {
      reason: 'Partials have been deprecated in favor of functional components',
      fix: (
        'Replace ' + chalk.red('Vue.partial(' + name + ')') + ' with a functional component'
      ),
      docsHash: 'Partials'
    }
  }
}
