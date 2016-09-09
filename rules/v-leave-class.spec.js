'use strict'

const check = createRuleChecker('v-leave-class')

describe('Rule: v-leave-class', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches simple v-leave class', () => {
    const warning = check(`
      .v-leave {
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace .v-leave with .v-leave-active (if it\'s left over from Vue 1.x)')
  })

  it('matches simple named leave class', () => {
    const warning = check(`
      .super-fade-leave {
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace .super-fade-leave with .super-fade-leave-active (if it\'s left over from Vue 1.x)')
  })
})
