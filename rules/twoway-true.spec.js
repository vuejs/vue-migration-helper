'use strict'

const check = createRuleChecker('twoway-true')

describe('Rule: twoway-true', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match "twoWay"', () => {
    const warning = check('twoWay')
    expect(warning).toBe(null)
  })

  it('matches "twoWay: true,"', () => {
    const warning = check(`
      twoWay: true,
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Delete twoWay: true, then $emit an event from the child component to trigger an update to the prop in the parent')
  })

  it('matches "twoWay:true,"', () => {
    const warning = check(`
      twoWay:true,
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Delete twoWay:true, then $emit an event from the child component to trigger an update to the prop in the parent')
  })

  it('matches "twoWay : true,"', () => {
    const warning = check(`
      twoWay : true,
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Delete twoWay : true, then $emit an event from the child component to trigger an update to the prop in the parent')
  })
})
