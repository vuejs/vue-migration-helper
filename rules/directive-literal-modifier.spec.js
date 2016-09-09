'use strict'

const check = createRuleChecker('directive-literal-modifier')

describe('Rule: directive-literal-modifier', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match a normal directive in an element', () => {
    const warning = check(`
      <p v-if="foo"></p>
    `)
    expect(warning).toBe(null)
  })

  it('does not match a normal directive standalone', () => {
    const warning = check(`
      v-if="foo"
    `)
    expect(warning).toBe(null)
  })

  it('matches simple directive with literal modifier in element', () => {
    const warning = check(`
      <p v-my-directive.literal="foo"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace v-my-directive.literal="foo" with v-my-directive="\'foo\'"')
  })

  it('matches simple directive with literal modifier standalone', () => {
    const warning = check(`
      v-my-directive.literal="foo"
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace v-my-directive.literal="foo" with v-my-directive="\'foo\'"')
  })

  it('matches complex directive with literal modifier standalone', () => {
    const warning = check(`
      v-my-directive:foo.a.literal.b="foo"
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace v-my-directive:foo.a.literal.b="foo" with v-my-directive:foo.a.b="\'foo\'"')
  })
})
