'use strict'

const check = createRuleChecker('vue-router/loading-route-data')

describe('Rule: loading-route-data', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match "loading route data"', () => {
    const warning = check('can reuse')
    expect(warning).toBe(null)
  })

  it('does not match "loadingRouteData"', () => {
    const warning = check('loadingRouteData')
    expect(warning).toBe(null)
  })

  it('matches "$loadingRouteData"', () => {
    const warning = check(`
      $loadingRouteData
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace $loadingRouteData with a reactive property that you define (see the link below for an example)')
  })

  it('matches "this.$loadingRouteData"', () => {
    const warning = check(`
      this.$loadingRouteData
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace $loadingRouteData with a reactive property that you define (see the link below for an example)')
  })

  it('matches "this.$loadingRouteData" surrounded by quotes', () => {
    const warning = check(`
      "$loadingRouteData"
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace $loadingRouteData with a reactive property that you define (see the link below for an example)')
  })
})
