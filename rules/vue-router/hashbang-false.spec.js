'use strict'

const check = createRuleChecker('vue-router/hashbang-false')

describe('Rule: hashbang-false', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match "can reuse"', () => {
    const warning = check('can reuse')
    expect(warning).toBe(null)
  })

  it('does not match "hashbang"', () => {
    const warning = check('hashbang')
    expect(warning).toBe(null)
  })

  it('matches "hashbang:"', () => {
    const warning = check(`
      hashbang:
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Remove the hashbang option')
  })

  it('matches "hashbang :"', () => {
    const warning = check(`
      hashbang :
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Remove the hashbang option')
  })
})
