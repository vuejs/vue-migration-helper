'use strict'

const check = createRuleChecker('array-prototype-set')

describe('Rule: array-prototype-set', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches a simple array set', () => {
    const warning = check(`
      this.array.$set(42, 'foo')
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace this.array.$set(42, \'foo\') with Vue.set(this.array, 42, \'foo\')')
  })

  it('matches a simple array set with independent variable', () => {
    const warning = check(`
      array.$set(42, 'foo')
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace array.$set(42, \'foo\') with Vue.set(array, 42, \'foo\')')
  })
})
