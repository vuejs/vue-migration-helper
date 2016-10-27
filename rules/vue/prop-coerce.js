'use strict'

module.exports = {
  pattern: /coerce\s*?(?::|\()/,
  warning: function (match) {
    return {
      reason: 'Prop coercion has been removed in favor of local computed properties',
      fix: 'Replace prop coercion with a local computed property',
      docsHash: 'coerce-Prop-Option',
      type: 'js'
    }
  }
}
