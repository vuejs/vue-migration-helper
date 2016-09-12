'use strict'

const check = createRuleChecker('replace-false')

describe('Rule: replace-false', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match "replace"', () => {
    const warning = check('replace')
    expect(warning).toBe(null)
  })

  it('matches "replace: false,"', () => {
    const warning = check(`
      replace: false,
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Delete the replace: false option and instead wrap your root component with an element similar to the one you\'re replacing, e.g. el: \'#app\' with template: \'<div id="app"> ... </div>\'')
  })

  it('matches "replace:false,"', () => {
    const warning = check(`
      replace:false,
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Delete the replace:false option and instead wrap your root component with an element similar to the one you\'re replacing, e.g. el: \'#app\' with template: \'<div id="app"> ... </div>\'')
  })

  it('matches "replace : false,"', () => {
    const warning = check(`
      replace : false,
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Delete the replace : false option and instead wrap your root component with an element similar to the one you\'re replacing, e.g. el: \'#app\' with template: \'<div id="app"> ... </div>\'')
  })
})
