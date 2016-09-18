'use strict'

const check = createRuleChecker('vue/v-show-with-v-else')

describe('Rule: v-show-with-v-else', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match a simple v-else', () => {
    const warning = check(`
      <p v-else></p>
    `)
    expect(warning).toBe(null)
  })

  it('matches a simple v-show with v-else, with v-else first', () => {
    const warning = check(`
      <p v-else v-show="foo"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace v-else with a v-if negation expression')
  })

  it('matches a simple v-show with v-else, with v-show first', () => {
    const warning = check(`
      <p v-show="foo" v-else></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace v-else with a v-if negation expression')
  })
})
