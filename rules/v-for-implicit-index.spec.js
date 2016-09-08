'use strict'

const check = createRuleChecker('v-for-implicit-index')

describe('Rule: v-for-implicit-index', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches an interpolated $index', () => {
    const warning = check(`
      {{ $index }}
    `)
    expect(warning).toBeTruthy()
  })

  it('matches a bound $index', () => {
    const warning = check(`
      <p v-bind:foo="$index"></p>
    `)
    expect(warning).toBeTruthy()
  })
})
