'use strict'

const check = createRuleChecker('vue-router/router-on')

describe('Rule: router-on', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match "router"', () => {
    const warning = check('router')
    expect(warning).toBe(null)
  })

  it('does not match "on"', () => {
    const warning = check('on')
    expect(warning).toBe(null)
  })

  it('matches "router.on("', () => {
    const warning = check(`
      router.on(
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace router.on with a route that\'s dynamically added to the routes array (see link below for details)')
  })
})
