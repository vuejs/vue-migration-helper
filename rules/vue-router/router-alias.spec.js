'use strict'

const check = createRuleChecker('vue-router/router-alias')

describe('Rule: router-alias', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match "router"', () => {
    const warning = check('router')
    expect(warning).toBe(null)
  })

  it('does not match "alias"', () => {
    const warning = check('on')
    expect(warning).toBe(null)
  })

  it('matches "router.alias("', () => {
    const warning = check(`
      router.alias(
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace router.alias with an alias option in a route definition (see link below for details)')
  })
})
