'use strict'

const check = createRuleChecker('vue/vue-config-unsafe-delimiters')

describe('Rule: vue-config-unsafe-delimiters', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches unsafeDelimiters set to true', () => {
    const warning = check(`
      Vue.config.unsafeDelimiters = true
    `)
    expect(warning).toBeTruthy()
  })

  it('matches unsafeDelimiters set to false', () => {
    const warning = check(`
      Vue.config.unsafeDelimiters = false
    `)
    expect(warning).toBeTruthy()
  })
})
