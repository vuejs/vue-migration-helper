'use strict'

const check = createRuleChecker('v-for-v-model-primitive-value')

describe('Rule: v-for-v-model-primitive-value', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches a simple v-for primitive and v-model combination, with v-model second', () => {
    const warning = check(`
      <p v-for="item in items" v-model="item"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace v-for="item in items" with an array of objects, then update v-model="item" to bind to a property on each object')
  })

  it('matches a v-for primitive and v-model combination, with v-model second, surrounded by other noise', () => {
    const warning = check(`
      <p @a.foo="b" :c="d" v-bind:e="f" v-for="item in items" @a.foo="b" :c="d" v-bind:e="f" v-model="item" @a.foo="b" :c="d" v-bind:e="f"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace v-for="item in items" with an array of objects, then update v-model="item" to bind to a property on each object')
  })

  it('matches a simple v-for primitive and v-model combination, with v-model first', () => {
    const warning = check(`
      <p v-model="item" v-for="item in items"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace v-for="item in items" with an array of objects, then update v-model="item" to bind to a property on each object')
  })

  it('matches a v-for primitive and v-model combination, with v-model second, surrounded by other noise', () => {
    const warning = check(`
      <p @a.foo="b" :c="d" v-bind:e="f" v-model="item" @a.foo="b" :c="d" v-bind:e="f" v-for="item in items" @a.foo="b" :c="d" v-bind:e="f"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace v-for="item in items" with an array of objects, then update v-model="item" to bind to a property on each object')
  })
})
