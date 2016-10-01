'use strict'

const check = createRuleChecker('vue-router/v-link')

describe('Rule: v-link', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches a simple v-link', () => {
    const warning = check(`
      <a v-link="'/foo'">
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace v-link="\'/foo\'" with the new <router-link> component (see link below for details)')
  })

  it('matches simple v-link with object', () => {
    const warning = check(`
      <a v-link="{ path: '/foo' }">
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace v-link="{ path: \'/foo\' }" with the new <router-link> component (see link below for details)')
  })
})
