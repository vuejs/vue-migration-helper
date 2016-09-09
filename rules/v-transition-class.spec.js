'use strict'

const check = createRuleChecker('v-transition-class')

describe('Rule: v-transition-class', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match v-transition-foo class', () => {
    const warning = check(`
      .v-transition-foo {
    `)
    expect(warning).toBe(null)
  })

  it('matches the default v-transition class', () => {
    const warning = check(`
      .v-transition {
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace .v-transition with .v-enter-active, .v-leave-active')
  })

  it('matches a named transition class', () => {
    const warning = check(`
      .super-fade-transition {
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace .super-fade-transition with .super-fade-enter-active, .super-fade-leave-active')
  })
})
