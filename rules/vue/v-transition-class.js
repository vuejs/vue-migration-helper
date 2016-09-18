'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /(\.([\w-]+)-transition)[^\w-]/,
  warning: function (match, cssClass, name) {
    return {
      reason: 'v-transition class has been deprecated to standardize on the same classes as Angular and React CSSTransitionGroup',
      fix: (
        'Replace ' + chalk.red(cssClass) + ' with ' +
        chalk.green(
          '.' + name + '-enter-active, ' +
          '.' + name + '-leave-active'
        )
      ),
      docsHash: 'transition-Attribute-deprecated'
    }
  }
}
