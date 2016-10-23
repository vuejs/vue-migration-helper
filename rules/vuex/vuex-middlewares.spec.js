'use strict'

const check = createRuleChecker('vuex/vuex-middlewares')

describe('Rule: vuex-middlewares', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match "middlewares"', () => {
    const warning = check(`
      middlewares
    `)
    expect(warning).toBe(null)
  })

  it('does not match "middlewares"', () => {
    const warning = check(`
      foomiddlewares
    `)
    expect(warning).toBe(null)
  })

  it('matches "middlewares"', () => {
    const warning = check(`
      middlewares:
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Rewrite your Vuex middlewares as plugins (see the link below for an example)')
  })
})
