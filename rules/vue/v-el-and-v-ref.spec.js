'use strict'

const check = createRuleChecker('vue/v-el-and-v-ref')

describe('Rule: v-el-and-v-ref', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches a simple v-el', () => {
    const warning = check(`
      <p v-el:foo>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Update v-el:foo to ref="foo"')
  })

  it('matches a simple v-ref', () => {
    const warning = check(`
      <p v-ref:foo>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Update v-ref:foo to ref="foo"')
  })

  it('matches v-el with dashes and camelCases it', () => {
    const warning = check(`
      <p v-ref:foo-bar>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Update v-ref:foo-bar to ref="fooBar"')
  })
})
