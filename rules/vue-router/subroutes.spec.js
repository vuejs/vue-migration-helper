'use strict'

const check = createRuleChecker('vue-router/subroutes')

describe('Rule: subroutes', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match "routes"', () => {
    const warning = check('routes')
    expect(warning).toBe(null)
  })

  it('does not match "subroutes"', () => {
    const warning = check('subroutes')
    expect(warning).toBe(null)
  })

  it('matches "subroutes:"', () => {
    const warning = check(`
      subroutes:
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace subroutes with children and update its routes to the new array syntax')
  })

  it('matches "subroutes :"', () => {
    const warning = check(`
      subroutes :
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace subroutes with children and update its routes to the new array syntax')
  })
})
