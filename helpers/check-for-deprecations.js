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
    var rule = require(file)
    rule.file = file
    return rule
  })

var styleExtensions = [
  'css', 'postcss', 'scss', 'sass', 'styl', 'stylus', 'less'
]

var ignorableExtensions = {
  template: styleExtensions,
  js: styleExtensions,
  style: ['js']
}

function fileHasExtension (file, extension) {
  return path.extname(file).slice(1) === extension
}

function shouldIgnoreWarning (file, warning) {
  if (warning.type === 'package.json') {
    return path.basename(file) !== warning.type
  } else {
    return ignorableExtensions[warning.type].some(function (extension) {
      return fileHasExtension(file, extension)
    })
  }
}

module.exports = function (fileData) {
  return rules.some(function (rule) {
    var warning = assertRule(fileData, rule)
    if (warning && !shouldIgnoreWarning(fileData.file, warning)) {
      reportWarning(fileData, warning, rule)
      return true
    }
    return false
  })
}
