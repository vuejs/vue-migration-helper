'use strict'

const check = createRuleChecker('vue/built-in-filters')

describe('Rule: built-in-filters', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches a simple capitalize filter', () => {
    const warning = check(`
      {{ hi | capitalize }}
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace the built-in capitalize filter with a custom filter, method, or computed property using npmjs.com/package/lodash.capitalize')
  })

  it('matches a simple uppercase filter', () => {
    const warning = check(`
      {{ hi | uppercase }}
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace hi | uppercase with hi.toUpperCase()')
  })

  it('matches a simple lowercase filter', () => {
    const warning = check(`
      {{ hi | lowercase }}
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace hi | lowercase with hi.toLowerCase()')
  })

  it('matches a simple currency filter', () => {
    const warning = check(`
      {{ hi | currency }}
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace the built-in currency filter with a custom filter, method, or computed property using format from npmjs.com/package/accounting')
  })

  it('matches a simple pluralize filter', () => {
    const warning = check(`
      {{ hi | pluralize }}
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace the built-in pluralize filter with a custom filter, method, or computed property using npmjs.com/package/pluralize')
  })

  it('matches a simple json filter', () => {
    const warning = check(`
      {{ hi | json }}
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Remove the built-in json filter, as output is now automatically nicely formatted')
  })
})
