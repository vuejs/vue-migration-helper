'use strict'

const check = createRuleChecker('vue-router/suppress-transition-error')

describe('Rule: suppress-transition-error', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match "suppress transition error"', () => {
    const warning = check('suppress transition error')
    expect(warning).toBe(null)
  })

  it('does not match "suppresstransitionerror"', () => {
    const warning = check('suppresstransitionerror')
    expect(warning).toBe(null)
  })

  it('matches "suppressTransitionError"', () => {
    const warning = check('suppressTransitionError')
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Remove the suppressTransitionError option')
  })

  it('matches "suppressTransitionError:"', () => {
    const warning = check(`
      suppressTransitionError:
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Remove the suppressTransitionError option')
  })

  it('matches "suppressTransitionError :"', () => {
    const warning = check(`
      suppressTransitionError :
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Remove the suppressTransitionError option')
  })
})
