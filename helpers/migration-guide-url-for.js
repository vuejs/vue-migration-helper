'use strict'

module.exports = function (library) {
  if (library === 'vue') {
    return 'http://vuejs.org/guide/migration.html'
  } else {
    return 'http://vuejs.org/guide/migration-' + library + '.html'
  }
}
