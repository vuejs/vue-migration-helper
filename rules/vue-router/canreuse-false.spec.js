'use strict'

const check = createRuleChecker('vue-router/canreuse-false')

describe('Rule: canreuse-false', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match "can reuse"', () => {
    const warning = check('can reuse')
    expect(warning).toBe(null)
  })

  it('does not match "canReuse"', () => {
    const warning = check('canReuse')
    expect(warning).toBe(null)
  })

  it('matches "canReuse:"', () => {
    const warning = check(`
      canReuse:
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Remove the canReuse option')
  })

  it('matches "canReuse :"', () => {
    const warning = check(`
      canReuse :
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Remove the canReuse option')
  })
})
