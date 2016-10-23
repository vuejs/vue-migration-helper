'use strict'

const checkIfOutdated = require('./check-if-outdated')
const { checkNodeVersion } = checkIfOutdated

describe('Helper: checkNodeVersion', () => {
  beforeEach(() => {
    mockProcessProperty('exit', jasmine.createSpy())
  })
  afterEach(() => {
    restoreProcessProperty('exit')
    restoreProcessProperty('version')
  })

  it('warns and exits with node v0.12', () => {
    mockProcessProperty('version', 'v0.12')
    const stdout = catchLog(checkNodeVersion)
    expect(stdout).toMatch('You must upgrade node')
    expect(process.exit).toHaveBeenCalledWith(1)
  })

  it('does not warn or exit with node v4.3.2', () => {
    mockProcessProperty('version', 'v4.3.2')
    const stdout = catchLog(checkNodeVersion)
    expect(stdout).toBe('')
    expect(process.exit).not.toHaveBeenCalled()
  })
})

describe('Helper: checkMigrationHelperVersion', () => {
  const currentVersion = require('../package.json').version

  beforeEach(() => {
    mockProcessProperty('exit', jasmine.createSpy())
  })
  afterEach(() => {
    restoreProcessProperty('exit')
  })

  it('warns and exits with an old version of vue-migration-helper', done => {
    const rewire = require('rewire')
    const mod = rewire('./check-if-outdated')
    mod.__set__({
      request: (options, callback) => {
        callback(null, { statusCode: 200 }, JSON.stringify({
          'dist-tags': {
            'latest': '999.999.999'
          }
        }))
      }
    })
    catchLog(mod.checkMigrationHelperVersion, stdout => {
      expect(stdout).toMatch('newer version of vue-migration-helper is available')
      expect(stdout).toMatch('latest:    999.999.999')
      expect(stdout).toMatch('installed: ' + currentVersion)
      expect(process.exit).toHaveBeenCalledWith(1)
      done()
    })
  })

  it('does not warn or exit with the latest version of vue-migration-helper', done => {
    const rewire = require('rewire')
    const mod = rewire('./check-if-outdated')
    mod.__set__({
      request: (options, callback) => {
        callback(null, { statusCode: 200 }, JSON.stringify({
          'dist-tags': {
            'latest': currentVersion
          }
        }))
      }
    })
    catchLog(mod.checkMigrationHelperVersion, stdout => {
      expect(stdout).toBe('')
      expect(process.exit).not.toHaveBeenCalled()
      done()
    })
  })

  it('does not warn or exit when it cannot reach the NPM registry', done => {
    const rewire = require('rewire')
    const mod = rewire('./check-if-outdated')
    mod.__set__({
      request: (options, callback) => {
        callback(null, { statusCode: 404 })
      }
    })
    catchLog(mod.checkMigrationHelperVersion, stdout => {
      expect(stdout).toBe('')
      expect(process.exit).not.toHaveBeenCalled()
      done()
    })
  })
})

var origProcessValues = {}
function mockProcessProperty (property, value) {
  if (typeof origProcessValues[property] === 'undefined') {
    origProcessValues[property] = process[property]
  }
  Object.defineProperty(process, property, {
    value: value
  })
}
function restoreProcessProperty (property) {
  if (typeof origProcessValues[property] !== 'undefined') {
    Object.defineProperty(process, property, {
      value: origProcessValues[property]
    })
    origProcessValues[property] = undefined
  }
}
