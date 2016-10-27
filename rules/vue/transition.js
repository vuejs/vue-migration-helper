'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /<[\w-]+[^>]*?\s(transition(?:=["']([\w-]+)["'])?)[^>]*?>/,
  warning: function (match, attribute, name) {
    const nameAttribute = name
      ? ' name="' + name + '"'
      : ''
    return {
      reason: 'The new and improved transition system requires use of new <transition> and <transition-group> components',
      fix: (
        'Replace ' + chalk.red(attribute) + ' attribute with either a ' +
        chalk.green('<transition' + nameAttribute + '>') + ' or ' +
        chalk.green('<transition-group' + nameAttribute + '>') +
        ' wrapper component'
      ),
      docsHash: 'transition-Attribute',
      type: 'template'
    }
  }
}
