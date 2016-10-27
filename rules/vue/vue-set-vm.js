'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /(Vue\.set|(?:this|vm|self)\.\$set)\(\s*?(this|vm|self)\s*?,([^,]+?),([^,]+?)\)/,
  warning: function (match, command, vm, property, value) {
    const formattedProperty = property.replace(/['"]/g, '').trim()
    return {
      reason: 'Vue.set and Vue.delete no longer work on Vue instances - it is now mandatory to properly declare all top-level reactive properties in the data option',
      fix: (
        'Replace ' + chalk.red(match) + ' with ' +
        chalk.green(
          vm + '.' + formattedProperty + ' = ' + value.trim()
        ) +
        ' and declare ' + formattedProperty + ' in the data option with an initial value'
      ),
      docsHash: 'Vue-set-and-Vue-delete-on-Vue-instances',
      type: 'js'
    }
  }
}
