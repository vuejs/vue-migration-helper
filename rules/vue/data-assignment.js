'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /[\w+\.]+?\.\$data\s*?=[^=][^\n]+/,
  warning: function (match) {
    return {
      reason: 'Replacing $data is no longer allowed, as it often has unintended side effects',
      fix: (
        'Instead of replacing $data with ' + chalk.red(match) +
        ', update individual properties or scope all the properties you want to update under a new object property, then replace that object'
      ),
      docsHash: 'Replacing-vm-data',
      type: 'js'
    }
  }
}
