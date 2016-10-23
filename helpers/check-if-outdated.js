'use strict'

var packageConfig = require('../package.json')
var request = require('request')
var semver = require('semver')
var chalk = require('chalk')

function checkNodeVersion () {
  function parseVersionNumber (versionString) {
    return parseFloat(versionString.replace(/[^\d\.]/g, ''))
  }

  var minNodeVersion = parseVersionNumber(packageConfig.engines.node)
  var currentNodeVersion = parseVersionNumber(process.version)
  if (minNodeVersion > currentNodeVersion) {
    console.log(chalk.red(
      'You must upgrade node to >=' + minNodeVersion + ' to use vue-migration-helper\n'
    ))
    process.exit(1)
  }
}

function checkMigrationHelperVersion (done) {
  request({
    url: 'https://registry.npmjs.org/vue-migration-helper',
    timeout: 1000
  }, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var latestVersion = JSON.parse(body)['dist-tags'].latest
      var localVersion = packageConfig.version
      if (semver.lt(localVersion, latestVersion)) {
        console.log()
        console.log(chalk.yellow('A newer version of vue-migration-helper is available.'))
        console.log()
        console.log('  latest:    ' + chalk.green(latestVersion))
        console.log('  installed: ' + chalk.red(localVersion))
        console.log()
        console.log('Please update with:')
        console.log()
        console.log(chalk.green(
          '  npm update --global vue-migration-helper'
        ))
        process.exit(1)
      }
    }
    done()
  })
}

function checkIfOutdated (done) {
  checkNodeVersion()
  checkMigrationHelperVersion(done)
}

checkIfOutdated.checkNodeVersion = checkNodeVersion
checkIfOutdated.checkMigrationHelperVersion = checkMigrationHelperVersion

module.exports = checkIfOutdated
