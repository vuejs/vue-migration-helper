#!/usr/bin/env node
'use strict'

var fs = require('graceful-fs')
var glob = require('glob')
var split = require('split')

var checkForDeprecations = require('./helpers/check-for-deprecations')

var args = process.argv.slice(2)
var folders = args.length
  ? '+(' + args.join('|') + ')/**/*'
  : '**/*'

glob(folders, {
  nodir: true,
  ignore: [
    'node_modules/**/*'
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
