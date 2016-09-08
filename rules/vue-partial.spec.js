'use strict'

const check = createRuleChecker('vue-partial')

describe('Rule: vue-partial', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches a partial declaration', () => {
    const warning = check(`
      Vue.partial('foo', {
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace Vue.partial(\'foo\') with a functional component')
  })

  it('matches a partial declaration with double quotes', () => {
    const warning = check(`
      Vue.partial("foo", {
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace Vue.partial("foo") with a functional component')
  })
})
