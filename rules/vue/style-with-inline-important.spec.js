'use strict'

const check = createRuleChecker('vue/style-with-inline-important')

describe('Rule: style-with-inline-important', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches a simple element with bound styles', () => {
    const warning = check(`
      <p v-bind:style="{ foo: bar !important; }"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Remove !important from v-bind:style="{ foo: bar !important; }"')
  })

  it('matches a complex element with bound styles', () => {
    const warning = check(`
      <p @a.foo="b" :c="d" v-bind:e="f" v-bind:style="{ foo: bar !important; }" @a.foo="b" :c="d" v-bind:e="f"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Remove !important from v-bind:style="{ foo: bar !important; }"')
  })
})
