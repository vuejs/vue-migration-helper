'use strict'

const check = createRuleChecker('vue/vm-get')

describe('Rule: vm-get', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches this.$get(\'foo\')', () => {
    const warning = check(`
      this.$get('foo')
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace this.$get(\'foo\') with this.foo')
  })

  it('matches this.$get(\'foo.bar.baz\')', () => {
    const warning = check(`
      this.$get('foo.bar.baz')
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace this.$get(\'foo.bar.baz\') with this.foo.bar.baz')
  })

  it('matches vm.$get(\'foo.bar.baz\')', () => {
    const warning = check(`
      vm.$get('foo.bar.baz')
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace vm.$get(\'foo.bar.baz\') with vm.foo.bar.baz')
  })

  it('matches self.$get(\'foo.bar.baz\')', () => {
    const warning = check(`
      self.$get('foo.bar.baz')
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace self.$get(\'foo.bar.baz\') with self.foo.bar.baz')
  })
})
