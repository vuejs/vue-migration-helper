'use strict'

const check = createRuleChecker('vue/cache-false')

describe('Rule: cache-false', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match "cache"', () => {
    const warning = check('cache')
    expect(warning).toBe(null)
  })

  it('matches "cache: false,"', () => {
    const warning = check(`
      cache: false,
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Refactor the computed property into a method')
  })

  it('matches "cache:false,"', () => {
    const warning = check(`
      cache:false,
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Refactor the computed property into a method')
  })

  it('matches "cache: false,"', () => {
    const warning = check(`
      cache : false,
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Refactor the computed property into a method')
  })
})
