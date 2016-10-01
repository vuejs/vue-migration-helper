'use strict'

const reportWarning = require('./report-warning')

describe('Helper: report-warning', () => {
  it('prints the correct output for a simple deprecation', () => {
    const stdout = catchLog(() => {
      reportWarning({
        file: '/foo/bar/baz.js',
        line: 42,
        lineNum: 'bbb'
      }, {
        reason: 'ccc',
        fix: 'ddd',
        docsHash: 'eee'
      }, {
        file: '/xxx/yyy/zzz.js'
      })
    })

    expect(stdout).toBe(`
1. ddd
  Line bbb: /foo/bar/baz.js
  Reason: ccc
  More info: http://vuejs.org/guide/migration-yyy.html#eee`)
  })

  it('prints the correct output for a simple vue deprecation', () => {
    const stdout = catchLog(() => {
      reportWarning({
        file: '/foo/bar/baz.js',
        line: 42,
        lineNum: 'bbb'
      }, {
        reason: 'ccc',
        fix: 'ddd',
        docsHash: 'eee'
      }, {
        file: '/xxx/vue/zzz.js'
      })
    })

    expect(stdout).toBe(`
2. ddd
  Line bbb: /foo/bar/baz.js
  Reason: ccc
  More info: http://vuejs.org/guide/migration.html#eee`)
  })
})
