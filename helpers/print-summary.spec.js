'use strict'

const printSummary = require('./print-summary')

describe('Helper: print-summary', () => {
  it('prints nothing when deprecations are found', () => {
    const stdout = catchLog(() => {
      printSummary(true)
    })
    expect(stdout).toBe('')
  })

  it('prints a message when deprecations are not found', () => {
    const stdout = catchLog(() => {
      printSummary(false)
    })
    expect(stdout).toContain('No obsolete syntax was detected.')
  })
})
