#!/usr/bin/env node
'use strict'

var fs = require('graceful-fs')
var glob = require('glob')
var split = require('split')

var checkForDeprecations = require('./helpers/check-for-deprecations')

var args = process.argv.slice(2)
var folders = args.length
  ? args.length === 1
    ? args + '/**/*'
    : '{' + args.join(',') + '}/**/*'
  : '**/*'

glob(folders, {
  nodir: true,
  ignore: [
    '**/.git/**/*',
    '**/node_modules/**/*',
    '**/*.+(jpe?g|gif|png|svg|woff2?|ttf|otf|eot|log|zip|map)'
  ]
}, function (error, files) {
  if (error) throw error
  files.forEach(function (file) {
    var lineNum = 0
    fs.createReadStream(file)
      .pipe(split())
      .on('data', function (line) {
        lineNum++
        checkForDeprecations({
          line: line,
          lineNum: lineNum,
          file: file
        })
      })
  })
})
