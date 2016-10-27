'use strict'

var chalk = require('chalk')

const builtInFilters = {
  capitalize: 'Replace the built-in $red{$filter} filter with a custom filter, method, or computed property using $green{npmjs.com/package/lodash.capitalize}',
  uppercase: 'Replace $red{$property | $filter} with $green{$property.toUpperCase()}',
  lowercase: 'Replace $red{$property | $filter} with $green{$property.toLowerCase()}',
  currency: 'Replace the built-in $red{$filter} filter with a custom filter, method, or computed property using $green{format} from $green{npmjs.com/package/accounting}',
  pluralize: 'Replace the built-in $red{$filter} filter with a custom filter, method, or computed property using $green{npmjs.com/package/pluralize}',
  json: 'Remove the built-in $red{$filter} filter, as output is now automatically nicely formatted'
}

module.exports = {
  pattern: new RegExp(
    '(\\w+)\\s*?[^\\|]\\|\\s*?(' +
    Object.keys(builtInFilters).join('|') +
    ')'
  ),
  warning: function (match, property, filter) {
    const message = builtInFilters[filter] + ''
    return {
      reason: 'Built-in filters have been removed in favor of external, specialized utility libraries',
      fix: message
        .replace(/\$property/g, property)
        .replace(/\$filter/g, filter)
        .replace(/\$green\{(.+?)\}/g, chalk.green('$1'))
        .replace(/\$red\{(.+?)\}/g, chalk.red('$1')),
      docsHash: 'Replacing-the-' + filter + '-Filter',
      type: 'template'
    }
  }
}
