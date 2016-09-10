'use strict'

const check = createRuleChecker('array-prototype-remove')

describe('Rule: array-prototype-remove', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match this.foo.$remove()', () => {
    const warning = check(`
      this.foo.$remove()
    `)
    expect(warning).toBe(null)
  })

  it('does not match foo.$remove()', () => {
    const warning = check(`
      foo.$remove()
    `)
    expect(warning).toBe(null)
  })

  it('does not match foo.$remove(function () {})', () => {
    const warning = check(`
      foo.$remove(function () {})
    `)
    expect(warning).toBe(null)
  })

  it('does not match foo.$remove(() => {}))', () => {
    const warning = check(`
      foo.$remove(() => {}))
    `)
    expect(warning).toBe(null)
  })

  it('does not match foo.$remove(() => bar))', () => {
    const warning = check(`
      foo.$remove(() => bar))
    `)
    expect(warning).toBe(null)
  })

  it('does not match foo.$remove(bar => bar))', () => {
    const warning = check(`
      foo.$remove(bar => bar))
    `)
    expect(warning).toBe(null)
  })

  it('matches a simple array remove', () => {
    const warning = check(`
      this.items.$remove(item)
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace this.items.$remove(item) with var index = this.items.indexOf(item); this.items.splice(index, 1)')
  })

  it('matches a simple array remove with independent variable', () => {
    const warning = check(`
      items.$remove(item)
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace items.$remove(item) with var index = items.indexOf(item); items.splice(index, 1)')
  })
})
