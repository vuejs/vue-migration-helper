'use strict'

const check = createRuleChecker('vm-interpolate')

describe('Rule: vm-interpolate', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches this.$interpolate(\'{{msg}} world!\')', () => {
    const warning = check(`
      this.$interpolate('{{msg}} world!')
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace this.$interpolate(\'{{msg}} world!\') with a solution using normal JavaScript')
  })

  it('matches vm.$interpolate(\'{{msg}} world!\')', () => {
    const warning = check(`
      vm.$interpolate('{{msg}} world!')
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace vm.$interpolate(\'{{msg}} world!\') with a solution using normal JavaScript')
  })

  it('matches self.$interpolate(\'{{msg}} world!\')', () => {
    const warning = check(`
      self.$interpolate('{{msg}} world!')
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace self.$interpolate(\'{{msg}} world!\') with a solution using normal JavaScript')
  })
})
