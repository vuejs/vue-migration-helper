'use strict'

var chalk = require('chalk')

module.exports = {
  pattern: /<[^>]+\b(?:(v-for=["'][^>]+?["'])[^>]+?\b(v-model=["'][^\[\.]+["'])|(v-model=["'][^\[\.]+["'])[^>]+?(v-for=["'][^>]+?["']))[^>]*?>/,
  warning: function (match, vForBefore, vModelAfter, vModelBefore, vForAfter) {
    const vFor = vForBefore || vForAfter
    const vModel = vModelBefore || vModelAfter
    return {
      reason: 'v-for iterated primitives are no longer supported in v-model',
      fix: 'Replace ' + chalk.red(vFor) + ' with an array of objects, then update ' + chalk.red(vModel) + ' to bind to a property on each object',
      docsHash: 'v-model-with-v-for-Iterated-Primitive-Values',
      type: 'template'
    }
  }
}
