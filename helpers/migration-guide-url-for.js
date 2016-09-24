'use strict'

module.exports = function (library) {
  if (library === 'vue') {
    return 'http://rc.vuejs.org/guide/migration.html'
  } else {
    return 'http://rc.vuejs.org/guide/migration-' + library + '.html'
  }
}
