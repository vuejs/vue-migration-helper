'use strict'

const check = createRuleChecker('prop-coerce')

describe('Rule: prop-coerce', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches coerce with ES5 function', () => {
    const warning = check(`
      coerce: function () {
    `)
    expect(warning).toBeTruthy()
  })
})
