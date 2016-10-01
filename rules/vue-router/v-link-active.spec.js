'use strict'

const check = createRuleChecker('vue-router/v-link-active')

describe('Rule: v-link-active', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches a simple v-link-active', () => {
    const warning = check(`
      <li v-link-active>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace v-link-active with the new <router-link> component with a custom tag (see link below for details)')
  })

  it('matches a v-link-active with other attributes', () => {
    const warning = check(`
      <li data-foo="bar" v-link-active class="baz">
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace v-link-active with the new <router-link> component with a custom tag (see link below for details)')
  })
})
