'use strict'

const check = createRuleChecker('vue/vm-delete')

describe('Rule: vm-delete', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match this.$delete(myObj, key)', () => {
    const warning = check(`
      this.$delete(myObj, key)
    `)
    expect(warning).toBe(null)
  })

  it('matches this.$delete(\'key\')', () => {
    const warning = check(`
      this.$delete('key')
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace this.$delete(\'key\') with this.key = null')
  })

  it('matches this.$delete(\'key-with-dashes\')', () => {
    const warning = check(`
      this.$delete('key-with-dashes')
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace this.$delete(\'key-with-dashes\') with this[\'key-with-dashes\'] = null')
  })

  it('matches this.$delete(`key-${with}-interpolated-string`)', () => {
    const warning = check(`
      this.$delete(\`key-\$\{with\}-interpolated-string\`)
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace this.$delete(`key-${with}-interpolated-string`) with this[`key-${with}-interpolated-string`] = null')
  })

  it('matches vm.$delete(\'key\')', () => {
    const warning = check(`
      vm.$delete('key')
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace vm.$delete(\'key\') with vm.key = null')
  })

  it('matches self.$delete(\'key\')', () => {
    const warning = check(`
      self.$delete('key')
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace self.$delete(\'key\') with self.key = null')
  })
})
