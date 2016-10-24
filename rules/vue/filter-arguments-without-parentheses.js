'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /\{\{\s*(?:(?!\}\}).)+?\|[^\|]\s*((\w+)\s+((?:(?!\}\})(?!\(.+?\))(?!\|).)+))\s*(?:(?!\}\}).)+?\}\}/,
  warning: function (match, filter, filterName, filterArgs) {
    return {
      reason: 'Filters with arguments must now use the same syntax as JavaScript functions',
      fix: (
        'Replace ' + chalk.red(filter.trim()) + ' with ' +
        chalk.green(
          filterName + '(' +
            filterArgs.trim().split(/\s+/).join(', ') +
          ')'
        )
      ),
      docsHash: 'Filter-Argument-Syntax',
      type: 'template'
    }
  }
}
