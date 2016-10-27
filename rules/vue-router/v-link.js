'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\bv-link=(?:'[^']+'|"[^"]+")/,
  warning: function (match) {
    return {
      reason: 'The v-link directive has been replaced with the new <router-link> component',
      fix: (
        'Replace ' + chalk.red(match) + ' with the new <router-link> component (see link below for details)'
      ),
      docsHash: 'v-link',
      type: 'template'
    }
  }
}
