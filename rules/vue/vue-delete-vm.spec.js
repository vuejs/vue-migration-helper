'use strict'

const check = createRuleChecker('vue/vue-delete-vm')

describe('Rule: vue-delete-vm', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match Vue.delete(foo, \'bar\')', () => {
    const warning = check(`
      Vue.delete(foo, 'bar')
    `)
    expect(warning).toBe(null)
  })

  it('matches Vue.delete(this, \'foo\')', () => {
    const warning = check(`
      Vue.delete(this, 'foo')
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace Vue.delete(this, \'foo\') with Vue.delete(this.newTopLevelObject, \'foo\'), then scope foo underneath newTopLevelObject, rather than declaring it as a top-level $data property')
  })

  it('matches Vue.delete(vm, \'foo\')', () => {
    const warning = check(`
      Vue.delete(vm, 'foo')
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace Vue.delete(vm, \'foo\') with Vue.delete(vm.newTopLevelObject, \'foo\'), then scope foo underneath newTopLevelObject, rather than declaring it as a top-level $data property')
  })

  it('matches Vue.delete(self, \'foo\')', () => {
    const warning = check(`
      Vue.delete(self, 'foo')
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace Vue.delete(self, \'foo\') with Vue.delete(self.newTopLevelObject, \'foo\'), then scope foo underneath newTopLevelObject, rather than declaring it as a top-level $data property')
  })
})
