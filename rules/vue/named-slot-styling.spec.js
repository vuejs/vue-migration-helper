'use strict'

const check = createRuleChecker('vue/named-slot-styling')

describe('Rule: named-slot-styling', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches a named slot selector', () => {
    const warning = check(`
      [slot="my-slot"] {
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace [slot="my-slot"] with a styled wrapper element or, in advanced use cases, modify the inserted content programmatically using a render function')
  })

  it('matches a more complex named slot selector', () => {
    const warning = check(`
      .parent > .child[slot='my-slot'] + .sibling {
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace .parent > .child[slot=\'my-slot\'] + .sibling with a styled wrapper element or, in advanced use cases, modify the inserted content programmatically using a render function')
  })
})
