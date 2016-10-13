'use strict'

const check = createRuleChecker('vue-router/router-start')

describe('Rule: router-start', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match "router"', () => {
    const warning = check('router')
    expect(warning).toBe(null)
  })

  it('does not match "start"', () => {
    const warning = check('on')
    expect(warning).toBe(null)
  })

  it('matches "router.start("', () => {
    const warning = check(`
      router.start(
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace router.start with router: router on your root Vue instance (see link below for details)')
  })
})
