'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /Vue\.set\(\s*?(this|vm|self)\s*?,([^,]+?),([^,]+?)\)/,
  warning: function (match, vm, property, value) {
    const formattedProperty = property.replace(/['"]/g, '').trim()
    return {
      reason: 'Vue.set',
      fix: (
        'Replace ' + chalk.red(match) + ' with ' +
        chalk.green(
          vm + '.' + formattedProperty + ' = ' + value.trim()
        ) +
        ' and declare ' + formattedProperty + ' in the data option with an initial value'
      ),
      docsHash: 'Partials'
    }
  }
}
