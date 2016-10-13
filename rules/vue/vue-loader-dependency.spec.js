'use strict'

const check = createRuleChecker('vue/vue-loader-dependency')

describe('Rule: vue-loader-dependency', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match "^9.0.0"', () => {
    const warning = check(`
      "vue-loader": "^9.0.0"
    `)
    expect(warning).toBe(null)
  })

  it('does not match "^9.0.0" with comma', () => {
    const warning = check(`
      "vue-loader": "^9.0.0",
    `)
    expect(warning).toBe(null)
  })

  it('does not match "^9.0.1"', () => {
    const warning = check(`
      "vue-loader": "^9.0.1"
    `)
    expect(warning).toBe(null)
  })

  it('does not match "9.0.0"', () => {
    const warning = check(`
      "vue-loader": "9.0.0"
    `)
    expect(warning).toBe(null)
  })

  it('does not match vuex "9.0.0"', () => {
    const warning = check(`
      "vuex": "9.0.0"
    `)
    expect(warning).toBe(null)
  })

  it('matches "^7.1.5"', () => {
    const warning = check(`
      "vue-loader": "^7.1.5"
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace "vue-loader": "^7.1.5" with "vue-loader": "^9.0.0", then run: npm install')
  })

  it('matches "^7.1.5" with comma', () => {
    const warning = check(`
      "vue-loader": "^7.1.5",
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace "vue-loader": "^7.1.5" with "vue-loader": "^9.0.0", then run: npm install')
  })

  it('matches "7.1.5"', () => {
    const warning = check(`
      "vue-loader": "7.1.5",
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace "vue-loader": "7.1.5" with "vue-loader": "^9.0.0", then run: npm install')
  })

  it('matches "0.12.1"', () => {
    const warning = check(`
      "vue-loader": "0.12.1",
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace "vue-loader": "0.12.1" with "vue-loader": "^9.0.0", then run: npm install')
  })
})
