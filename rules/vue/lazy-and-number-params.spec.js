'use strict'

const check = createRuleChecker('vue/lazy-and-number-params')

describe('Rule: lazy-and-number-params', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match v-model.number="foo"', () => {
    const warning = check(`
      v-model.number="foo"
    `)
    expect(warning).toBe(null)
  })

  it('does not match an input with type="number"', () => {
    const warning = check(`
      <input v-model="foo" type="number">
    `)
    expect(warning).toBe(null)
  })

  it('matches a simple number param', () => {
    const warning = check(`
      <input v-model="foo" number>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Refactor number to a v-model modifier: v-model.number="foo"')
  })

  it('matches a simple lazy param', () => {
    const warning = check(`
      <input v-model="foo" lazy>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Refactor lazy to a v-model modifier: v-model.lazy="foo"')
  })

  it('matches a number param with extra attributes', () => {
    const warning = check(`
      <input a="b" v-model="foo" c="d" number d="e">
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Refactor number to a v-model modifier: v-model.number="foo"')
  })

  it('matches a number param with pre-existing v-model modifier', () => {
    const warning = check(`
      <input v-model.lazy="foo" number>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Refactor number to a v-model modifier: v-model.lazy.number="foo"')
  })
})
