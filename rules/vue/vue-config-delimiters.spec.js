'use strict'

const check = createRuleChecker('vue/vue-config-delimiters')

describe('Rule: vue-config-delimiters', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches delimiters set to true', () => {
    const warning = check(`
      Vue.config.delimiters = true
    `)
    expect(warning).toBeTruthy()
  })

  it('matches delimiters set to false', () => {
    const warning = check(`
      Vue.config.delimiters = false
    `)
    expect(warning).toBeTruthy()
  })
})
