'use strict'

const check = createRuleChecker('vue/vm-log')

describe('Rule: vm-log', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches this.$log(\'{{msg}} world!\')', () => {
    const warning = check(`
      this.$log('{{msg}} world!')
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Delete this.$log(\'{{msg}} world!\') and install the Vue Devtools instead: https://github.com/vuejs/vue-devtools')
  })

  it('matches vm.$log(\'{{msg}} world!\')', () => {
    const warning = check(`
      vm.$log('{{msg}} world!')
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Delete vm.$log(\'{{msg}} world!\') and install the Vue Devtools instead: https://github.com/vuejs/vue-devtools')
  })

  it('matches self.$log(\'{{msg}} world!\')', () => {
    const warning = check(`
      self.$log('{{msg}} world!')
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Delete self.$log(\'{{msg}} world!\') and install the Vue Devtools instead: https://github.com/vuejs/vue-devtools')
  })
})
