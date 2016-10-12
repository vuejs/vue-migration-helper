'use strict'

const check = createRuleChecker('vue/vuex-dependency')

describe('Rule: vuex-dependency', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match "^1.0.0"', () => {
    const warning = check(`
      "vuex": "^1.0.0"
    `)
    expect(warning).toBe(null)
  })

  it('does not match "^1.0.0" with comma', () => {
    const warning = check(`
      "vuex": "^1.0.0",
    `)
    expect(warning).toBe(null)
  })

  it('does not match "^1.0.1"', () => {
    const warning = check(`
      "vuex": "^1.0.1"
    `)
    expect(warning).toBe(null)
  })

  it('does not match "^2.0.1"', () => {
    const warning = check(`
      "vuex": "^2.0.1"
    `)
    expect(warning).toBe(null)
  })

  it('does not match "1.0.0"', () => {
    const warning = check(`
      "vuex": "1.0.0"
    `)
    expect(warning).toBe(null)
  })

  it('does not match "2.0.0"', () => {
    const warning = check(`
      "vuex": "2.0.0"
    `)
    expect(warning).toBe(null)
  })

  it('does not match vue-loader "1.0.0"', () => {
    const warning = check(`
      "vue-loader": "0.6.0"
    `)
    expect(warning).toBe(null)
  })

  it('matches "^0.0.27"', () => {
    const warning = check(`
      "vuex": "^0.0.27"
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace "vuex": "^0.0.27" with "vuex": "^1.0.0", then run: npm install')
  })

  it('matches "^0.0.27" with comma', () => {
    const warning = check(`
      "vuex": "^0.0.27",
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace "vuex": "^0.0.27" with "vuex": "^1.0.0", then run: npm install')
  })

  it('matches "0.0.27"', () => {
    const warning = check(`
      "vuex": "0.0.27",
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace "vuex": "0.0.27" with "vuex": "^1.0.0", then run: npm install')
  })

  it('matches "0.12.1"', () => {
    const warning = check(`
      "vuex": "0.12.1",
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace "vuex": "0.12.1" with "vuex": "^1.0.0", then run: npm install')
  })
})
