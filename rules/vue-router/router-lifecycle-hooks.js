'use strict'

var chalk = require('chalk')

const hookReplacements = {
  activate: 'beforeRouteEnter',
  canActivate: 'beforeEnter',
  deactivate: 'beforeDestroy',
  canDeactivate: 'beforeRouteLeave'
}

const extraInfo = {
  activate: 'in the component',
  canActivate: 'in the route',
  deactivate: '(or ' + chalk.green('destroyed') + ') in the component',
  canDeactivate: 'in the component'
}

module.exports = {
  pattern: new RegExp(
    '^\\s*(' +
    Object.keys(hookReplacements).join('|') +
    ')\\s*?(?::|\\()'
  ),
  warning: function (match, hook) {
    const replacementHook = hookReplacements[hook] + ''
    const info = extraInfo[hook]
    return {
      reason: 'The ' + hook + ' router lifecycle hook has been removed',
      fix: (
        'Replace ' + chalk.red(hook) + ' with ' +
        (replacementHook.indexOf(' ') === -1
          ? chalk.green(replacementHook)
          : replacementHook) + ' ' +
        (info || '')
      ),
      docsHash: hook + '',
      type: 'js'
    }
  }
}
