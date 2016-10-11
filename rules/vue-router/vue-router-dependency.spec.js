'use strict'

const check = createRuleChecker('vue-router/vue-router-dependency')

describe('Rule: vue-router-dependency', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match "^2.0.0"', () => {
    const warning = check(`
      "vue-router": "^2.0.0"
    `)
    expect(warning).toBe(null)
  })

  it('does not match "^2.0.0" with comma', () => {
    const warning = check(`
      "vue-router": "^2.0.0",
    `)
    expect(warning).toBe(null)
  })

  it('does not match "^2.0.1"', () => {
    const warning = check(`
      "vue-router": "^2.0.1"
    `)
    expect(warning).toBe(null)
  })

  it('does not match "2.0.0"', () => {
    const warning = check(`
      "vue-router": "2.0.0"
    `)
    expect(warning).toBe(null)
  })

  it('does not match vuex "1.0.0"', () => {
    const warning = check(`
      "vuex": "1.0.0"
    `)
    expect(warning).toBe(null)
  })

  it('matches "^0.7.13"', () => {
    const warning = check(`
      "vue-router": "^0.7.13"
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace "vue-router": "^0.7.13" with "vue-router": "^2.0.0", then run: npm install')
  })

  it('matches "^0.7.13" with comma', () => {
    const warning = check(`
      "vue-router": "^0.7.13",
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace "vue-router": "^0.7.13" with "vue-router": "^2.0.0", then run: npm install')
  })

  it('matches "0.7.13"', () => {
    const warning = check(`
      "vue-router": "0.7.13",
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace "vue-router": "0.7.13" with "vue-router": "^2.0.0", then run: npm install')
  })

  it('matches "0.7.0"', () => {
    const warning = check(`
      "vue-router": "0.7.0",
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace "vue-router": "0.7.0" with "vue-router": "^2.0.0", then run: npm install')
  })
})
