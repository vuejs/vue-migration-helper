'use strict'

const check = createRuleChecker('vue-router/router-go')

describe('Rule: router-go', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match "router"', () => {
    const warning = check('router')
    expect(warning).toBe(null)
  })

  it('does not match "go"', () => {
    const warning = check('go')
    expect(warning).toBe(null)
  })

  it('does not match "router.go(-2)"', () => {
    const warning = check('router.go(-2)')
    expect(warning).toBe(null)
  })

  it('does not match "router.go(3)"', () => {
    const warning = check('router.go(3)')
    expect(warning).toBe(null)
  })

  it('does not match "router.go(foo)"', () => {
    const warning = check('router.go(foo)')
    expect(warning).toBe(null)
  })

  it('matches "router.go(\'foo\')"', () => {
    const warning = check(`
      router.go('foo')
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace router.go with router.push')
  })

  it('matches "router.go(\'/\')"', () => {
    const warning = check(`
      router.go('/')
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace router.go with router.push')
  })

  it('matches "router.go(\'/\')"', () => {
    const warning = check(`
      router.go(\`
        /foo/bar
      \`)
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace router.go with router.push')
  })

  it('matches "router.go({ path: \'/\' })"', () => {
    const warning = check(`
      router.go({ path: '/' })
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace router.go with router.push')
  })

  it('matches multiline "router.go({ path: \'/\' })"', () => {
    const warning = check(`
      router.go({
        path: '/'
      })
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace router.go with router.push')
  })
})
