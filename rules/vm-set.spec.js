'use strict'

const check = createRuleChecker('vm-set')

describe('Rule: vm-set', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match this.$set(obj, \'foo\', 42)', () => {
    const warning = check(`
      this.$set(obj, 'foo', 42)
    `)
    expect(warning).toBe(null)
  })

  it('matches this.$set(\'foo.bar\', 42)', () => {
    const warning = check(`
      this.$set('foo.bar', 42)
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace this.$set(\'foo.bar\', 42) with this.$set(this.foo, \'bar\', 42)')
  })

  it('matches this.$set(\'foo.bar.baz\', 42)', () => {
    const warning = check(`
      this.$set('foo.bar.baz', 42)
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace this.$set(\'foo.bar.baz\', 42) with this.$set(this.foo.bar, \'baz\', 42)')
  })

  it('matches vm.$set(\'foo.bar.baz\', 42)', () => {
    const warning = check(`
      vm.$set('foo.bar.baz', 42)
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace vm.$set(\'foo.bar.baz\', 42) with vm.$set(vm.foo.bar, \'baz\', 42)')
  })

  it('matches self.$set(\'foo.bar.baz\', 42)', () => {
    const warning = check(`
      self.$set('foo.bar.baz', 42)
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace self.$set(\'foo.bar.baz\', 42) with self.$set(self.foo.bar, \'baz\', 42)')
  })
})
