'use strict'

const check = createRuleChecker('vue/v-on-keycodes')

describe('Rule: v-on-keycodes', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches a simple keyCode setting with the old syntax', () => {
    const warning = check(`
      Vue.directive('on').keyCodes.f1 = 112
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace Vue.directive(\'on\').keyCodes with Vue.config.keyCodes')
  })
})
