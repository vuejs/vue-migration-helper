'use strict'

module.exports = {
  pattern: /\bstore\s*.\s*watch\s*\(\s*['"`]/,
  warning: function (match) {
    return {
      reason: 'The new store.watch takes a function as the first argument, allowing you to watch not only state, but also custom getters',
      fix: (
        'Update store.watch to use a function rather than a string path for the first argument (see link below for an example)'
      ),
      docsHash: 'store-watch-with-String-Property-Path',
      type: 'js'
    }
  }
}
