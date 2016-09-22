#!/usr/bin/env node
'use strict'

var fs = require('graceful-fs')
var glob = require('glob')
var split = require('split')

var checkForDeprecations = require('./helpers/check-for-deprecations')
var trackStats = require('./helpers/track-stats')

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
    var errorsCount = 0
    var stream = fs.createReadStream(file)
      .pipe(split())
      .on('data', function (line) {
        lineNum++
        var hasErrors = checkForDeprecations({
          line: line,
          lineNum: lineNum,
          file: file
        })
        if (hasErrors) {
          errorsCount++
        }
      })

    stream.on('end', function () {
      trackStats(errorsCount, files.length)
    })
  })
})
