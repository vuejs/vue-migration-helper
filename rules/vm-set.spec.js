'use strict'

const check = createRuleChecker('vm-set')

describe('Rule: vm-set', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches this.$set(args)', () => {
    const warning = check(`
      this.$set(args)
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace this.$set(args) with Vue.set(args)')
  })

  it('matches vm.$set(args)', () => {
    const warning = check(`
      vm.$set(args)
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace vm.$set(args) with Vue.set(args)')
  })

  it('matches self.$set(args)', () => {
    const warning = check(`
      self.$set(args)
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace self.$set(args) with Vue.set(args)')
  })

  it('matches this.$set(many, \'different\', args)', () => {
    const warning = check(`
      this.$set(many, 'different', args)
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace this.$set(many, \'different\', args) with Vue.set(many, \'different\', args)')
  })
})
