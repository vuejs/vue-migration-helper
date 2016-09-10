'use strict'

const check = createRuleChecker('data-assignment')

describe('Rule: data-assignment', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches a simple data assignment', () => {
    const warning = check(`
      this.$data = { a: 'b' }
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Instead of replacing $data with this.$data = { a: \'b\' }, update individual properties or scope all the properties you want to update under a new object property, then replace that object')
  })
})
