'use strict'

const check = createRuleChecker('vue-config-async')

describe('Rule: vue-config-async', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches async set to true', () => {
    const warning = check(`
      Vue.config.async = true
    `)
    expect(warning).toBeTruthy()
  })

  it('matches async set to false', () => {
    const warning = check(`
      Vue.config.async = false
    `)
    expect(warning).toBeTruthy()
  })
})
