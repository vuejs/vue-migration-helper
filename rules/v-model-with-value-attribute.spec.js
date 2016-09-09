'use strict'

const check = createRuleChecker('v-model-with-value-attribute')

describe('Rule: v-model-with-value-attribute', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches a simple v-model and value', () => {
    const warning = check(`
      <input v-model="foo" value="hi">
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Delete value="hi" and instead update the initial state of foo to \'hi\'')
  })

  it('matches a with multiple attributes', () => {
    const warning = check(`
      <input a="b" v-model="foo" c="d" value="hi" d="e">
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Delete value="hi" and instead update the initial state of foo to \'hi\'')
  })

  it('matches a very complex element', () => {
    const warning = check(`
      <input v-for:a.b.c="(a,b) in aa" v-model.lazy.number="foo" v-bind:c="d" value="hi" @d="e">
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Delete value="hi" and instead update the initial state of foo to \'hi\'')
  })
})
