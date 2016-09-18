'use strict'

const check = createRuleChecker('vue/filter-arguments-without-parentheses')

describe('Rule: filter-arguments-without-parentheses', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match a filter with a single argument and the correct syntax', () => {
    const warning = check(`
      <p>{{ foo | formatDate('YY/MM/DD') }}</p>
    `)
    expect(warning).toBe(null)
  })

  it('matches a filter with a single argument', () => {
    const warning = check(`
      <p>{{ foo | formatDate 'YY/MM/DD' }}</p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace formatDate \'YY/MM/DD\' with formatDate(\'YY/MM/DD\')')
  })

  it('matches a filter with a multiple arguments', () => {
    const warning = check(`
      <p>{{ foo | formatDate 'YY/MM/DD' foo 'bar' baz }}</p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace formatDate \'YY/MM/DD\' foo \'bar\' baz with formatDate(\'YY/MM/DD\', foo, \'bar\', baz)')
  })

  it('matches a filter with a multiple arguments and other filters chained after it', () => {
    const warning = check(`
      <p>{{ foo | formatDate 'YY/MM/DD' foo 'bar' baz | anotherFilter hi ho hi ho }}</p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace formatDate \'YY/MM/DD\' foo \'bar\' baz with formatDate(\'YY/MM/DD\', foo, \'bar\', baz)')
  })

  it('matches a filter with a multiple arguments and a fixed filter chained after it', () => {
    const warning = check(`
      <p>{{ foo | formatDate 'YY/MM/DD' foo 'bar' baz | anotherFilter(hi, ho, hi, ho) }}</p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace formatDate \'YY/MM/DD\' foo \'bar\' baz with formatDate(\'YY/MM/DD\', foo, \'bar\', baz)')
  })

  it('matches a filter with a multiple arguments and a fixed filter chained before it', () => {
    const warning = check(`
      <p>{{ foo | formatDate('YY/MM/DD' foo 'bar' baz) | anotherFilter hi ho hi ho }}</p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace anotherFilter hi ho hi ho with anotherFilter(hi, ho, hi, ho)')
  })
})
