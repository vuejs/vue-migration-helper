'use strict'

const check = createRuleChecker('vue/vue-directive')

describe('Rule: vue-directive', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches a directive declaration', () => {
    const warning = check(`
      Vue.directive('foo', {
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Check Vue.directive(\'foo\') to make sure its syntax has been updated and for anything beyond simple DOM manipulations, refactor to a component')
  })

  it('matches a directive declaration with double quotes', () => {
    const warning = check(`
      Vue.directive("foo", {
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Check Vue.directive("foo") to make sure its syntax has been updated and for anything beyond simple DOM manipulations, refactor to a component')
  })
})
