'use strict'

const check = createRuleChecker('vue/track-by')

describe('Rule: track-by', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches a simple element with v-for and track-by, with v-for first', () => {
    const warning = check(`
      <p v-for="item in items" track-by="id"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Update track-by="id" to v-bind:key="item.id"')
  })

  it('matches a simple element with v-for and track-by, with track-by first', () => {
    const warning = check(`
      <p track-by="id" v-for="item in items"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Update track-by="id" to v-bind:key="item.id"')
  })

  it('matches a simple element with v-for with an index and track-by', () => {
    const warning = check(`
      <p v-for="(item, index) in items" track-by="id"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Update track-by="id" to v-bind:key="item.id"')
  })

  it('matches a complex element with v-for with an index and track-by', () => {
    const warning = check(`
      <p @a.foo="b" :c="d" v-bind:e="f" v-for="(item, index) in items" @a.foo="b" :c="d" v-bind:e="f"  track-by="id" @a.foo="b" :c="d" v-bind:e="f" ></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Update track-by="id" to v-bind:key="item.id"')
  })
})
