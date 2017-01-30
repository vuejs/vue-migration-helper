'use strict'

const check = createRuleChecker('vue/v-for-implicit-index-and-key')

describe('Rule: v-for-implicit-index-and-key', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches an interpolated $index', () => {
    const warning = check(`
      {{ $index }}
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Rename $index to index and explicity declare it (e.g. v-for="(item, index) in items")')
  })

  it('matches a bound $index', () => {
    const warning = check(`
      <p v-bind:foo="$index"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Rename $index to index and explicity declare it (e.g. v-for="(item, index) in items")')
  })

  it('matches an interpolated $key', () => {
    const warning = check(`
      {{ $key }}
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Rename $key to key and explicity declare it (e.g. v-for="(value, key) in object")')
  })

  it('matches a bound $key', () => {
    const warning = check(`
      <p v-bind:foo="$key"></p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Rename $key to key and explicity declare it (e.g. v-for="(value, key) in object")')
  })

  it('does not match other words', () => {
    const warning = check(`
      {{ $keyword }}
    `)
    expect(warning).toBe(null)
  })
})
