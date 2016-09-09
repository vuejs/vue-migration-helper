'use strict'

const check = createRuleChecker('dispatch-and-broadcast')

describe('Rule: dispatch-and-broadcast', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches this.$dispatch(\'foo\')', () => {
    const warning = check(`
      this.$dispatch('foo')
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace this.$dispatch(\'foo\') to use a global event bus or vuex (see link below for implementation details)')
  })

  it('matches this.$broadcast(\'foo\')', () => {
    const warning = check(`
      this.$broadcast('foo')
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace this.$broadcast(\'foo\') to use a global event bus or vuex (see link below for implementation details)')
  })
})
