'use strict'

const check = createRuleChecker('vue/vue-transition')

describe('Rule: vue-transition', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches a transition declaration', () => {
    const warning = check(`
      Vue.transition('foo', {
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace Vue.transition(\'foo\') with a component that uses the new <transition> or <transition-group> element as its root')
  })

  it('matches a transition declaration with double quotes', () => {
    const warning = check(`
      Vue.transition("foo", {
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace Vue.transition("foo") with a component that uses the new <transition> or <transition-group> element as its root')
  })
})
