'use strict'

const check = createRuleChecker('vue/vue-dependency')

fdescribe('Rule: vue-dependency', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match "^2.0.0"', () => {
    const warning = check(`
      "vue": "^2.0.0"
    `)
    expect(warning).toBe(null)
  })

  it('does not match "^2.0.0" with comma', () => {
    const warning = check(`
      "vue": "^2.0.0",
    `)
    expect(warning).toBe(null)
  })

  it('does not match "^2.0.1"', () => {
    const warning = check(`
      "vue": "^2.0.1"
    `)
    expect(warning).toBe(null)
  })

  it('does not match "2.0.0"', () => {
    const warning = check(`
      "vue": "2.0.0"
    `)
    expect(warning).toBe(null)
  })

  it('does not match vuex "1.0.0"', () => {
    const warning = check(`
      "vuex": "1.0.0"
    `)
    expect(warning).toBe(null)
  })

  it('matches "^1.0.27"', () => {
    const warning = check(`
      "vue": "^1.0.27"
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace "vue": "^1.0.27" with "vue": "^2.0.0", then run: npm install')
  })

  it('matches "^1.0.27" with comma', () => {
    const warning = check(`
      "vue": "^1.0.27",
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace "vue": "^1.0.27" with "vue": "^2.0.0", then run: npm install')
  })

  it('matches "1.0.27"', () => {
    const warning = check(`
      "vue": "1.0.27",
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace "vue": "1.0.27" with "vue": "^2.0.0", then run: npm install')
  })

  it('matches "0.12.1"', () => {
    const warning = check(`
      "vue": "0.12.1",
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace "vue": "0.12.1" with "vue": "^2.0.0", then run: npm install')
  })
})
