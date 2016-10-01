'use strict'

const check = createRuleChecker('vue-router/router-redirect')

describe('Rule: router-redirect', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match "router"', () => {
    const warning = check('router')
    expect(warning).toBe(null)
  })

  it('does not match "redirect"', () => {
    const warning = check('on')
    expect(warning).toBe(null)
  })

  it('matches "router.redirect("', () => {
    const warning = check(`
      router.redirect(
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace router.redirect with a redirect option in a route definition (see link below for details)')
  })
})
