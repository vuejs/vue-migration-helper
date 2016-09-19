'use strict'

var recursiveReadSync = require('recursive-readdir-sync')
var path = require('path')
var assertRule = require('./assert-rule')
var reportWarning = require('./report-warning')

var rulesPath = path.join(__dirname, '../rules')
var rules = recursiveReadSync(rulesPath)
  .filter(function (file) {
    return (
      file.indexOf('.js') === file.length - 3 &&
      file.indexOf('.spec') === -1
    )
  })
  .map(function (file) {
    return require(file)
  })

module.exports = function (fileData) {
  rules.some(function (rule) {
    var warning = assertRule(fileData, rule)
    if (warning) {
      reportWarning(fileData, warning)
      return true
    }
    return false
  })
}
