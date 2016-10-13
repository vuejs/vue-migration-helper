'use strict'

const check = createRuleChecker('vue-router/save-scroll-position')

describe('Rule: save-scroll-position', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match "save scroll position"', () => {
    const warning = check('save scroll position')
    expect(warning).toBe(null)
  })

  it('matches "saveScrollPosition"', () => {
    const warning = check('saveScrollPosition')
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace saveScrollPosition with the new scrollBehavior option, which takes a function (see the link below for examples)')
  })

  it('matches "saveScrollPosition:"', () => {
    const warning = check(`
      saveScrollPosition:
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace saveScrollPosition with the new scrollBehavior option, which takes a function (see the link below for examples)')
  })

  it('matches "saveScrollPosition :"', () => {
    const warning = check(`
      saveScrollPosition :
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace saveScrollPosition with the new scrollBehavior option, which takes a function (see the link below for examples)')
  })
})
