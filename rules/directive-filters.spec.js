'use strict'

const check = createRuleChecker('directive-filters')

describe('Rule: directive-filters', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches a simple v-model filter', () => {
    const warning = check(`
      <p v-model="foo | bar"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Remove filter from v-model="foo | bar')
  })

  it('matches a simple v-on filter', () => {
    const warning = check(`
      <p v-on:keyup.enter="foo | bar"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Remove filter from v-on:keyup.enter="foo | bar')
  })

  it('matches a simple v-on shorthand filter', () => {
    const warning = check(`
      <p @keyup.enter="foo | bar"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Remove filter from @keyup.enter="foo | bar')
  })

  it('matches a simple v-bind shorthand filter', () => {
    const warning = check(`
      <p :foo="bar | baz"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Remove filter from :foo="bar | baz')
  })

  it('matches a v-for filter with an argument', () => {
    const warning = check(`
      <p v-for="item in items | formatDate 'YY-MM-DD'"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Remove filter from v-for="item in items | formatDate \'YY-MM-DD\'')
  })

  it('matches chained v-for filters', () => {
    const warning = check(`
      <p v-for="item in items | foo bar | baz bez"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Remove filter from v-for="item in items | foo bar | baz bez')
  })
})
