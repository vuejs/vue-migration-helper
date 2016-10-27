'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /(this|vm|self)\.\$(appendTo|before|after|remove)\s*?\(\s*?(.+?)\s*?\)/,
  warning: function (match, vm, method, elementOrSelector) {
    const element = /['"`]/.test(elementOrSelector)
      ? 'document.querySelector(' + elementOrSelector + ')'
      : elementOrSelector
    const replacement = {
      appendTo: element + '.appendChild(' + vm + '.$el' + ')',
      before: element + '.parentNode.insertBefore(' + vm + '.$el, ' + element + ')',
      after: element + '.parentNode.insertBefore(' + vm + '.$el, ' + element + '.nextSibling)',
      remove: vm + '.$el.remove()'
    }[method]
    return {
      reason: 'vm.$' + method + ' has been removed in favor of simply using the native DOM API on vm.$el',
      fix: (
        'Replace ' + chalk.red(match) + ' with ' +
        chalk.green(replacement)
      ),
      docsHash: 'vm-' + method + '',
      type: 'js'
    }
  }
}
