'use strict'

module.exports = {
  pattern: /\bmiddlewares:/,
  warning: function (match) {
    return {
      reason: 'Vuex middlewares have been deprecated in favor of a new plugin system',
      fix: (
        'Rewrite your Vuex middlewares as plugins (see the link below for an example)'
      ),
      docsHash: 'Middlewares-deprecated',
      type: 'js'
    }
  }
}
