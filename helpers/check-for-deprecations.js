'use strict'

var fs = require('graceful-fs')
var path = require('path')
var assertRule = require('./assert-rule')
var reportWarning = require('./report-warning')

var rulesPath = path.join(__dirname, '../rules')
var rules = fs.readdirSync(rulesPath)
  .filter(function (file) {
    return file.indexOf('.spec') === -1
  })
  .map(function (file) {
    return require(path.join(rulesPath, file))
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
