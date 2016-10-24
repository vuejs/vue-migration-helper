'use strict'

const check = createRuleChecker('vue-router/router-lifecycle-data')

describe('Rule: router-lifecycle-data', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match data with ES5 function', () => {
    const warning = check(`
      data: function () {
    `)
    expect(warning).toBe(null)
  })

  it('does not match data with ES5 function and a space before the colon', () => {
    const warning = check(`
      data : function () {
    `)
    expect(warning).toBe(null)
  })

  it('does not match data with ES5 function and a space before the colon, but not after', () => {
    const warning = check(`
      data :function () {
    `)
    expect(warning).toBe(null)
  })

  it('does not match data with ES5 function and no spaces around the colon', () => {
    const warning = check(`
      data:function () {
    `)
    expect(warning).toBe(null)
  })

  it('does not match data with ES2015 arrow function', () => {
    const warning = check(`
      data: () => {
    `)
    expect(warning).toBe(null)
  })

  it('does not match data with ES2015 object function', () => {
    const warning = check(`
      data () {
    `)
    expect(warning).toBe(null)
  })

  it('does not match data with ES2015 object function and no spaces around parentheses', () => {
    const warning = check(`
      data(){
    `)
    expect(warning).toBe(null)
  })

  it('does not match activate in text with parentheses after it', () => {
    const warning = check(`
      blah blah data (blah blah)
    `)
    expect(warning).toBe(null)
  })

  it('matches data with ES2015 arrow function and one argument', () => {
    const warning = check(`
      data: foo => {
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace the data route hook with a watcher that reacts to $route changes')
  })

  it('matches data with ES2015 arrow function and one argument with parentheses', () => {
    const warning = check(`
      data: (foo) => {
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace the data route hook with a watcher that reacts to $route changes')
  })

  it('matches data with ES2015 arrow function and multiple arguments with parentheses', () => {
    const warning = check(`
      data: (foo, bar, baz) => {
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace the data route hook with a watcher that reacts to $route changes')
  })

  it('matches data with ES2015 object function and one argument', () => {
    const warning = check(`
      data (foo) {
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace the data route hook with a watcher that reacts to $route changes')
  })
})
