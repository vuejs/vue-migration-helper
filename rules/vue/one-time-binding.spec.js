'use strict'

const check = createRuleChecker('vue/one-time-binding')

describe('Rule: one-time-binding', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches a simple one-time binding', () => {
    const warning = check(`
      <p>{{* foo }}</p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace {{* foo }} with v-once="foo" on a containing element')
  })

  it('matches a simple one-time binding with a space before the star', () => {
    const warning = check(`
      <p>{{ * foo }}</p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace {{ * foo }} with v-once="foo" on a containing element')
  })

  it('matches a complex one-time binding', () => {
    const warning = check(`
      <p>{{* 2 * 3 / 5 + 11 + foo + bar + 'baz' - 42 }}</p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace {{* 2 * 3 / 5 + 11 + foo + bar + \'baz\' - 42 }} with v-once="2 * 3 / 5 + 11 + foo + bar + \'baz\' - 42" on a containing element')
  })
})
