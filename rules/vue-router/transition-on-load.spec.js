'use strict'

const check = createRuleChecker('vue-router/transition-on-load')

describe('Rule: transition-on-load', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match "transition"', () => {
    const warning = check('routes')
    expect(warning).toBe(null)
  })

  it('does not match "transition on load"', () => {
    const warning = check('routes')
    expect(warning).toBe(null)
  })

  it('matches "transitionOnLoad"', () => {
    const warning = check('transitionOnLoad')
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('arst')
  })

  it('matches "transitionOnLoad:"', () => {
    const warning = check(`
      transitionOnLoad:
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('arst')
  })

  it('matches "transitionOnLoad :"', () => {
    const warning = check(`
      transitionOnLoad :
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('arst')
  })
})
