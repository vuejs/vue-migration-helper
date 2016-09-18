'use strict'

const check = createRuleChecker('vue/vue-element-directive')

describe('Rule: vue-element-directive', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches an element directive declaration', () => {
    const warning = check(`
      Vue.elementDirective('foo', {
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace Vue.elementDirective(\'foo\') with a component')
  })

  it('matches an element directive declaration with double quotes', () => {
    const warning = check(`
      Vue.elementDirective("foo", {
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace Vue.elementDirective("foo") with a component')
  })
})
