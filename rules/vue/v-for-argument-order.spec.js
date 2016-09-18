'use strict'

const check = createRuleChecker('vue/v-for-argument-order')

describe('Rule: v-for-argument-order', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match a v-for the correct argument order', () => {
    const warning = check(`
      <p v-for="(item, index) in items">{{ item }}, {{ index }}</p>
    `)
    expect(warning).toBe(null)
  })

  it('matches a v-for with index as first argument', () => {
    const warning = check(`
      <p v-for="(index, item) in items">{{ item }}, {{ index }}</p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Switch argument order in v-for="(index, item) in items" to (item, index)')
  })

  it('matches a v-for with i as first argument', () => {
    const warning = check(`
      <p v-for="(i, item) in items">{{ item }}, {{ i }}</p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Switch argument order in v-for="(i, item) in items" to (item, i)')
  })

  it('matches a v-for with j as first argument', () => {
    const warning = check(`
      <p v-for="(j, item) in items">{{ item }}, {{ j }}</p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Switch argument order in v-for="(j, item) in items" to (item, j)')
  })

  it('matches a v-for with k as first argument', () => {
    const warning = check(`
      <p v-for="(k, item) in items">{{ item }}, {{ k }}</p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Switch argument order in v-for="(k, item) in items" to (item, k)')
  })

  it('matches a v-for with ind as first argument', () => {
    const warning = check(`
      <p v-for="(ind, item) in items">{{ item }}, {{ ind }}</p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Switch argument order in v-for="(ind, item) in items" to (item, ind)')
  })
})
