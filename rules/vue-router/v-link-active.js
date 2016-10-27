'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\bv-link-active\b/,
  warning: function (match) {
    return {
      reason: 'Active route classes are now handled through the <router-link> component',
      fix: (
        'Replace ' + chalk.red(match) + ' with the new <router-link> component with a custom tag (see link below for details)'
      ),
      docsHash: 'v-link-active',
      type: 'template'
    }
  }
}
