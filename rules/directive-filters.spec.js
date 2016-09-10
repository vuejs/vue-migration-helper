'use strict'

const check = createRuleChecker('directive-filters')

describe('Rule: directive-filters', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match a simple v-bind', () => {
    const warning = check(`
      <p v-bind:foo="bar"></p>
    `)
    expect(warning).toBe(null)
  })

  it('matches a simple v-model filter', () => {
    const warning = check(`
      <p v-model="foo | bar"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace filtered value in v-model="foo | bar" with a computed property')
  })

  it('matches a simple v-on filter', () => {
    const warning = check(`
      <p v-on:keyup.enter="foo | bar"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace filtered value in v-on:keyup.enter="foo | bar" with a computed property')
  })

  it('matches a simple v-on shorthand filter', () => {
    const warning = check(`
      <p @keyup.enter="foo | bar"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace filtered value in @keyup.enter="foo | bar" with a computed property')
  })

  it('matches a simple v-bind shorthand filter', () => {
    const warning = check(`
      <p :foo="bar | baz"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace filtered value in :foo="bar | baz" with a computed property')
  })

  it('matches a v-for filter with an argument', () => {
    const warning = check(`
      <p v-for="item in items | formatDate 'YY-MM-DD'"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace filtered value in v-for="item in items | formatDate \'YY-MM-DD\'" with a computed property')
  })

  it('matches chained v-for filters', () => {
    const warning = check(`
      <p v-for="item in items | foo bar | baz bez"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace filtered value in v-for="item in items | foo bar | baz bez" with a computed property')
  })
})
