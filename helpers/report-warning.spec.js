'use strict'

const reportWarning = require('./report-warning')

describe('Helper: report-summary', () => {
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
      })
    })

    expect(stdout).toBe(`
1. ddd
  Line bbb: /foo/bar/baz.js
  Reason: ccc
  More info: http://rc.vuejs.org/guide/migration-bar.html#eee`)
  })
})
