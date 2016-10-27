'use strict'

module.exports = {
  pattern: /\bmiddlewares:/,
  warning: function (match) {
    return {
      reason: 'Vuex middlewares have been replaced by a new plugin system',
      fix: (
        'Rewrite your Vuex middlewares as plugins (see the link below for an example)'
      ),
      docsHash: 'Middlewares',
      type: 'js'
    }
  }
}
