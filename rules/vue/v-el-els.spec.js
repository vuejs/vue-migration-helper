'use strict'

const check = createRuleChecker('vue/v-el-els')

describe('Rule: v-el-els', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches this.$els', () => {
    const warning = check(`
      this.$els
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Update this.$els to this.$refs')
  })

  it('matches vm.$els', () => {
    const warning = check(`
      vm.$els
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Update vm.$els to vm.$refs')
  })

  it('matches vm.$els.fooBar', () => {
    const warning = check(`
      vm.$els.fooBar
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Update vm.$els.fooBar to vm.$refs.fooBar')
  })

  it('matches vm.$els.fooBar with assignment', () => {
    const warning = check(`
      vm.$els.fooBar = 'baz'
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Update vm.$els.fooBar to vm.$refs.fooBar')
  })

  it('matches vm.$els[\'fooBar\']', () => {
    const warning = check(`
      vm.$els['fooBar']
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Update vm.$els[\'fooBar\'] to vm.$refs[\'fooBar\']')
  })

  it('matches vm.$els[\'fooBar\'] with assignment', () => {
    const warning = check(`
      vm.$els['fooBar'] = 'baz'
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Update vm.$els[\'fooBar\'] to vm.$refs[\'fooBar\']')
  })

  it('matches vm.$els[fooBar] with assignment', () => {
    const warning = check(`
      vm.$els[fooBar] = 'baz'
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Update vm.$els[fooBar] to vm.$refs[fooBar]')
  })
})
