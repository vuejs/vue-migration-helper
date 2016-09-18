'use strict'

const check = createRuleChecker('vue/lifecycle-hooks')

describe('Rule: lifecycle-hooks', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match "already"', () => {
    const warning = check('already:')
    expect(warning).toBe(null)
  })

  it('matches beforeCompile with ES5 function', () => {
    const warning = check(`
      beforeCompile: function () {
    `)
    expect(warning).toBeTruthy()
  })

  it('matches beforeCompile with ES5 function and a space before the colon', () => {
    const warning = check(`
      beforeCompile : function () {
    `)
    expect(warning).toBeTruthy()
  })

  it('matches beforeCompile with ES5 function and a space before the colon, but not after', () => {
    const warning = check(`
      beforeCompile :function () {
    `)
    expect(warning).toBeTruthy()
  })

  it('matches beforeCompile with ES5 function and no spaces around the colon', () => {
    const warning = check(`
      beforeCompile:function () {
    `)
    expect(warning).toBeTruthy()
  })

  it('matches beforeCompile with ES2015 arrow function', () => {
    const warning = check(`
      beforeCompile: () => {
    `)
    expect(warning).toBeTruthy()
  })

  it('matches beforeCompile with ES2015 arrow function and one argument', () => {
    const warning = check(`
      beforeCompile: foo => {
    `)
    expect(warning).toBeTruthy()
  })

  it('matches beforeCompile with ES2015 object function', () => {
    const warning = check(`
      beforeCompile () {
    `)
    expect(warning).toBeTruthy()
  })

  it('matches beforeCompile with ES2015 object function and no spaces around parentheses', () => {
    const warning = check(`
      beforeCompile(){
    `)
    expect(warning).toBeTruthy()
  })

  it('matches beforeCompile with ES2015 object function and one argument', () => {
    const warning = check(`
      beforeCompile (foo) {
    `)
    expect(warning).toBeTruthy()
  })

  it('generates the appropriate fix for beforeCompile', () => {
    const warning = check(`
      beforeCompile () {
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace beforeCompile with created')
  })

  it('generates the appropriate fix for compiled', () => {
    const warning = check(`
      compiled () {
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace compiled with mounted')
  })

  it('generates the appropriate fix for init', () => {
    const warning = check(`
      init () {
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace init with beforeCreate')
  })

  it('generates the appropriate fix for attached', () => {
    const warning = check(`
      attached () {
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace attached with a custom in-DOM check in another hook')
  })

  it('generates the appropriate fix for detached', () => {
    const warning = check(`
      detached () {
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace detached with a custom in-DOM check in another hook')
  })

  it('generates the appropriate fix for ready', () => {
    const warning = check(`
      ready () {
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace ready with mounted, then use Vue.nextTick if you need an in-document guarantee')
  })
})
