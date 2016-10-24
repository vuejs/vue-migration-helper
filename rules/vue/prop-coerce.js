'use strict'

module.exports = {
  pattern: /coerce\s*?(?::|\()/,
  warning: function (match) {
    return {
      reason: 'Prop coercion has been deprecated in favor of local computed properties',
      fix: 'Replace prop coercion with a local computed property',
      docsHash: 'coerce-Prop-Option-deprecated',
      type: 'js'
    }
  }
}
