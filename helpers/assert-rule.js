'use strict'

function oldSchoolSpread (array) {
  return Object.prototype.toString.call(array) === '[object Array]'
    ? array
    : [].slice.call(array)
}

module.exports = function (fileData, rule) {
  var matches = fileData.line.match(rule.pattern)
  return matches &&
    rule.warning.apply(null, oldSchoolSpread(matches))
}
