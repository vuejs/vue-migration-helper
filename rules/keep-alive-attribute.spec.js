'use strict'

const check = createRuleChecker('keep-alive-attribute')

describe('Rule: keep-alive-attribute', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches a simple keep-alive attribute', () => {
    const warning = check(`
      <p keep-alive></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Refactor keep-alive attribute to a <keep-alive></keep-alive> wrapper component')
  })

  it('matches a keep-alive attribute surrounded by complex attributes', () => {
    const warning = check(`
      <p @a.foo="b" :c="d" v-bind:e="f" keep-alive @a.foo="b" :c="d" v-bind:e="f"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Refactor keep-alive attribute to a <keep-alive></keep-alive> wrapper component')
  })
})
