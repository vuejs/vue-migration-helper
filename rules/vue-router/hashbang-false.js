'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\bhashbang\s*?:/,
  warning: function (match) {
    return {
      reason: 'Hashbangs are no longer required for Google to crawl a URL, so they are no longer the default (or even an option) for the hash strategy',
      fix: (
        'Remove the ' + chalk.red('hashbang') + ' option'
      ),
      docsHash: 'hashbang-false',
      type: 'js'
    }
  }
}
