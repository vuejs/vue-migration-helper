'use strict'

const check = createRuleChecker('vue-router/router-map')

describe('Rule: router-map', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match "router"', () => {
    const warning = check('router')
    expect(warning).toBe(null)
  })

  it('does not match "map"', () => {
    const warning = check('map')
    expect(warning).toBe(null)
  })

  it('matches "router.map("', () => {
    const warning = check(`
      router.map(
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace router.map with an array on the new routes option (see link below for details)')
  })
})
