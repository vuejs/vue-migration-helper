'use strict'

const check = createRuleChecker('vue-router/arbitrary-route-properties')

describe('Rule: arbitrary-route-properties', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match "route.meta"', () => {
    const warning = check('route.meta')
    expect(warning).toBe(null)
  })

  it('does not match "route.path"', () => {
    const warning = check('route.path')
    expect(warning).toBe(null)
  })

  it('does not match "route.query"', () => {
    const warning = check('route.query')
    expect(warning).toBe(null)
  })

  it('does not match "route.redirect"', () => {
    const warning = check('route.query')
    expect(warning).toBe(null)
  })

  it('matches "route.foo"', () => {
    const warning = check(`
      route.foo
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace route.foo with route.meta.foo, then also update the route option to be scoped under meta')
  })

  it('matches "route.foo.bar.baz"', () => {
    const warning = check(`
      route.foo.bar.baz
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace route.foo with route.meta.foo, then also update the route option to be scoped under meta')
  })

  it('matches "route.foo[1]"', () => {
    const warning = check(`
      route.foo[1]
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace route.foo with route.meta.foo, then also update the route option to be scoped under meta')
  })
})
