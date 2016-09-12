'use strict'

const check = createRuleChecker('vue-set-vm')

describe('Rule: vue-set-vm', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match Vue.set(foo, \'bar\', 42)', () => {
    const warning = check(`
      Vue.set(foo, 'bar', 42)
    `)
    expect(warning).toBe(null)
  })

  it('matches Vue.set(this, \'foo\', 42)', () => {
    const warning = check(`
      Vue.set(this, 'foo', 42)
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace Vue.set(this, \'foo\', 42) with this.foo = 42 and declare foo in the data option with an initial value')
  })

  it('matches Vue.set(vm, \'foo\', 42)', () => {
    const warning = check(`
      Vue.set(vm, 'foo', 42)
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace Vue.set(vm, \'foo\', 42) with vm.foo = 42 and declare foo in the data option with an initial value')
  })

  it('matches Vue.set(self, \'foo\', 42)', () => {
    const warning = check(`
      Vue.set(self, 'foo', 42)
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace Vue.set(self, \'foo\', 42) with self.foo = 42 and declare foo in the data option with an initial value')
  })

  it('matches vm.$set(this, \'foo\', 42)', () => {
    const warning = check(`
      vm.$set(this, 'foo', 42)
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace vm.$set(this, \'foo\', 42) with this.foo = 42 and declare foo in the data option with an initial value')
  })
})
