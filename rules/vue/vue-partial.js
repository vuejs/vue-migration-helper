'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /Vue\.partial\s*\(\s*(['"`].+['"`])/,
  warning: function (match, name) {
    return {
      reason: 'Partials have been removed in favor of functional components',
      fix: (
        'Replace ' + chalk.red('Vue.partial(' + name + ')') + ' with a normal component that receives props - or a functional component in performance-critical situations'
      ),
      docsHash: 'Vue-partial',
      type: 'js'
    }
  }
}
