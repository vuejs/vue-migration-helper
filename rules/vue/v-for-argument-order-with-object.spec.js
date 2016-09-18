'use strict'

const check = createRuleChecker('vue/v-for-argument-order-with-object')

describe('Rule: v-for-argument-order-with-object', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match a v-for the correct argument order', () => {
    const warning = check(`
      <p v-for="(value, key) in object">{{ value }}, {{ key }}</p>
    `)
    expect(warning).toBe(null)
  })

  it('does not match a v-for without a key', () => {
    const warning = check(`
      <p v-for="value in object">{{ value }}</p>
    `)
    expect(warning).toBe(null)
  })

  it('matches a v-for key as the first property', () => {
    const warning = check(`
      <p v-for="(key, value) in object">{{ value }}, {{ key }}</p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Switch argument order in v-for="(key, value) in object" to (value, key)')
  })
})
