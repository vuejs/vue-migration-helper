#!/usr/bin/env node

'use strict'

var fs = require('graceful-fs')
var glob = require('glob')
var split = require('split')

var checkForDeprecations = require('./helpers/check-for-deprecations')
var reportStats = require('./helpers/report-stats')

var args = process.argv.slice(2)
var folders = args.length ? args.length === 1 ? args + '/**/*' : '{' + args.join(',') + '}/**/*' : '**/*'

glob(folders, {
  nodir: true,
  ignore: [
    '**/.git/**/*',
    '**/node_modules/**/*',
    '**/*.+(jpe?g|gif|png|svg|woff2?|ttf|otf|eot|log|zip|map)'
  ]
}, function (error, files) {
  if (error) throw error
  var proms = files.map(function (file) {
    return new Promise(function (resolve, reject) {
      var lineNum = 0
      var errorsCount = 0
      fs.createReadStream(file)
        .pipe(split())
        .on('data', function (line) {
          errorsCount += checkForDeprecations({
            line: line,
            lineNum: ++lineNum,
            file: file
          }) ? 1 : 0
        })
        .on('end', function () {
          resolve(errorsCount)
        })
    })
  })
  reportStats(proms)
})
