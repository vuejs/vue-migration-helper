'use strict'

const check = createRuleChecker('vue-router/route-path-one-or-more-named-parameters')

describe('Rule: route-path-one-or-more-named-parameters', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match a JS comment wrapped by quotes', () => {
    const warning = check('"/* foo */"')
    expect(warning).toBe(null)
  })

  it('does not match "/foo/bar/baz"', () => {
    const warning = check('"/foo/bar/baz"')
    expect(warning).toBe(null)
  })

  it('matches "/*bar"', () => {
    const warning = check(`
      "/*bar"
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace "/*bar" with "/:bar+"')
  })

  it('matches "/foo/*bar"', () => {
    const warning = check(`
      "/foo/*bar"
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace "/foo/*bar" with "/foo/:bar+"')
  })

  it('matches "/foo/*bar/baz"', () => {
    const warning = check(`
      "/foo/*bar/baz"
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace "/foo/*bar/baz" with "/foo/:bar+/baz"')
  })
})
