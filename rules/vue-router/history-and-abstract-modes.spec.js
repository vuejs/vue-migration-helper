'use strict'

const check = createRuleChecker('vue-router/history-and-abstract-modes')

describe('Rule: history-and-abstract-modes', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match "history"', () => {
    const warning = check('history')
    expect(warning).toBe(null)
  })

  it('matches "history: true,"', () => {
    const warning = check(`
      history: true,
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace history: true with mode: \'history\'')
  })

  it('matches "history:true,"', () => {
    const warning = check(`
      history:true,
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace history:true with mode:\'history\'')
  })

  it('matches "history : true,"', () => {
    const warning = check(`
      history : true,
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace history : true with mode : \'history\'')
  })

  it('matches "abstract: true,"', () => {
    const warning = check(`
      abstract: true,
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace abstract: true with mode: \'abstract\'')
  })

  it('sets the correct docsHash for history: true', () => {
    const warning = check(`
      history: true,
    `)
    expect(warning).toBeTruthy()
    expect(warning.docsHash).toBe('history-true-deprecated')
  })

  it('sets the correct docsHash for abstract: true', () => {
    const warning = check(`
      abstract: true,
    `)
    expect(warning).toBeTruthy()
    expect(warning.docsHash).toBe('abstract-true-deprecated')
  })
})
