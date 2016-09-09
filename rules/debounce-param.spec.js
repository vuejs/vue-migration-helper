'use strict'

const check = createRuleChecker('debounce-param')

describe('Rule: debounce-param', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches a simple debounce param', () => {
    const warning = check(`
      <p v-model="foo" debounce="100"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Delete debounce="100" and wrap the expensive operation(s) you want to throttle with lodash\'s debounce or throttle functions (see the link below for an example)')
  })

  it('matches a debounce param without quotes', () => {
    const warning = check(`
      <p v-model="foo" debounce=100></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Delete debounce=100 and wrap the expensive operation(s) you want to throttle with lodash\'s debounce or throttle functions (see the link below for an example)')
  })
})
