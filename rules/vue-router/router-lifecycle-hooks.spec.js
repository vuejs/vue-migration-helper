'use strict'

const check = createRuleChecker('vue-router/router-lifecycle-hooks')

describe('Rule: router-lifecycle-hooks', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match activated:', () => {
    const warning = check('activated:')
    expect(warning).toBe(null)
  })

  it('does not match activated:', () => {
    const warning = check('activated:')
    expect(warning).toBe(null)
  })

  it('matches activate with ES5 function', () => {
    const warning = check(`
      activate: function () {
    `)
    expect(warning).toBeTruthy()
  })

  it('matches activate with ES5 function and a space before the colon', () => {
    const warning = check(`
      activate : function () {
    `)
    expect(warning).toBeTruthy()
  })

  it('matches activate with ES5 function and a space before the colon, but not after', () => {
    const warning = check(`
      activate :function () {
    `)
    expect(warning).toBeTruthy()
  })

  it('matches activate with ES5 function and no spaces around the colon', () => {
    const warning = check(`
      activate:function () {
    `)
    expect(warning).toBeTruthy()
  })

  it('matches activate with ES2015 arrow function', () => {
    const warning = check(`
      activate: () => {
    `)
    expect(warning).toBeTruthy()
  })

  it('matches activate with ES2015 arrow function and one argument', () => {
    const warning = check(`
      activate: foo => {
    `)
    expect(warning).toBeTruthy()
  })

  it('matches activate with ES2015 object function', () => {
    const warning = check(`
      activate () {
    `)
    expect(warning).toBeTruthy()
  })

  it('matches activate with ES2015 object function and no spaces around parentheses', () => {
    const warning = check(`
      activate(){
    `)
    expect(warning).toBeTruthy()
  })

  it('matches activate with ES2015 object function and one argument', () => {
    const warning = check(`
      activate (foo) {
    `)
    expect(warning).toBeTruthy()
  })

  it('generates the appropriate fix for activate', () => {
    const warning = check(`
      activate () {
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace activate with beforeRouteEnter in the component')
  })

  it('generates the appropriate fix for canActivate', () => {
    const warning = check(`
      canActivate () {
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace canActivate with beforeEnter in the route')
  })

  it('generates the appropriate fix for deactivate', () => {
    const warning = check(`
      deactivate () {
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace deactivate with beforeDestroy (or destroyed) in the component')
  })

  it('generates the appropriate fix for canDeactivate', () => {
    const warning = check(`
      canDeactivate () {
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace canDeactivate with beforeRouteLeave in the component')
  })
})
