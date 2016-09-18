'use strict'

const check = createRuleChecker('vue/v-bind-sync')

describe('Rule: v-bind-sync', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches a simple v-bind.sync', () => {
    const warning = check(`
      <p v-bind:foo.sync="bar"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace v-bind:foo.sync="bar" with v-bind:foo="bar", then $emit an event from the child component to trigger an update to bar in the parent')
  })

  it('matches a simple v-bind.sync without quotes', () => {
    const warning = check(`
      <p v-bind:foo.sync=bar></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace v-bind:foo.sync=bar with v-bind:foo=bar, then $emit an event from the child component to trigger an update to bar in the parent')
  })

  it('matches a simple v-bind.sync with v-bind shorthand', () => {
    const warning = check(`
      <p :foo.sync="bar"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace :foo.sync="bar" with :foo="bar", then $emit an event from the child component to trigger an update to bar in the parent')
  })

  it('matches a very complex v-bind.sync example', () => {
    const warning = check(`
      <p @a.foo="b" :c="d" v-bind:e="f" :foo-bar.sync=baz @a.foo="b" :c="d" v-bind:e="f"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace :foo-bar.sync=baz with :foo-bar=baz, then $emit an event from the child component to trigger an update to baz in the parent')
  })
})
