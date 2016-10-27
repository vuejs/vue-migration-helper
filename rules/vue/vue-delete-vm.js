'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /Vue\.delete\(\s*?(this|vm|self)\s*?,([^,]+?)\)/,
  warning: function (match, vm, property) {
    return {
      reason: 'Vue.set and Vue.delete no longer work on Vue instances - it is now mandatory to properly declare all top-level reactive properties in the data option',
      fix: (
        'Replace ' + chalk.red(match) + ' with ' +
        chalk.green(
          'Vue.delete(' +
            vm + '.newTopLevelObject, ' +
            property.trim() +
          ')'
        ) +
        ', then scope ' + property.replace(/['"]/g, '').trim() + ' underneath newTopLevelObject, rather than declaring it as a top-level $data property'
      ),
      docsHash: 'Vue-set-and-Vue-delete-on-Vue-instances',
      type: 'js'
    }
  }
}
