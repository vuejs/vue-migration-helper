'use strict'

const check = createRuleChecker('vue/v-bind-once')

describe('Rule: v-bind-once', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches a simple v-bind.once', () => {
    const warning = check(`
      <p v-bind:foo.once="bar"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace v-bind:foo.once="bar" with v-bind:foo="bar", then make foo the initial value of a data property')
  })

  it('matches a simple v-bind.once without quotes', () => {
    const warning = check(`
      <p v-bind:foo.once=bar></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace v-bind:foo.once=bar with v-bind:foo=bar, then make foo the initial value of a data property')
  })

  it('matches a simple v-bind.once with v-bind shorthand', () => {
    const warning = check(`
      <p :foo.once="bar"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace :foo.once="bar" with :foo="bar", then make foo the initial value of a data property')
  })

  it('matches a very complex v-bind.once example', () => {
    const warning = check(`
      <p @a.foo="b" :c="d" v-bind:e="f" :foo-bar.once=baz @a.foo="b" :c="d" v-bind:e="f"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace :foo-bar.once=baz with :foo-bar=baz, then make foo-bar the initial value of a data property')
  })
})
