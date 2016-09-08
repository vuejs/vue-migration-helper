'use strict'

const check = createRuleChecker('vue-config-debug')

describe('Rule: vue-config-debug', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches debug set to true', () => {
    const warning = check(`
      Vue.config.debug = true
    `)
    expect(warning).toBeTruthy()
  })

  it('matches debug set to false', () => {
    const warning = check(`
      Vue.config.debug = false
    `)
    expect(warning).toBeTruthy()
  })
})
