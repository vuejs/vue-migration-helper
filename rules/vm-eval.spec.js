'use strict'

const check = createRuleChecker('vm-eval')

describe('Rule: vm-eval', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches this.$eval(\'msg | uppercase\')', () => {
    const warning = check(`
      this.$eval('msg | uppercase')
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace this.$eval(\'msg | uppercase\') with a solution using normal JavaScript')
  })

  it('matches vm.$eval(\'msg | uppercase\')', () => {
    const warning = check(`
      vm.$eval('msg | uppercase')
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace vm.$eval(\'msg | uppercase\') with a solution using normal JavaScript')
  })

  it('matches self.$eval(\'msg | uppercase\')', () => {
    const warning = check(`
      self.$eval('msg | uppercase')
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace self.$eval(\'msg | uppercase\') with a solution using normal JavaScript')
  })
})
