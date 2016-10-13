'use strict'

const check = createRuleChecker('vue-router/root-option')

describe('Rule: root-option', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match "root"', () => {
    const warning = check('root')
    expect(warning).toBe(null)
  })

  it('does not match "root:"', () => {
    const warning = check('root:')
    expect(warning).toBe(null)
  })

  it('does not match "root: \'\'"', () => {
    const warning = check('root: \'\'')
    expect(warning).toBe(null)
  })

  it('does not match "root: \'foo\'"', () => {
    const warning = check('root: \'foo\'')
    expect(warning).toBe(null)
  })

  it('matches "root: \'/\'"', () => {
    const warning = check(`
      root: '/'
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Rename the root option to base')
  })

  it('matches "root: "/""', () => {
    const warning = check(`
      root: "/"
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Rename the root option to base')
  })

  it('matches "root: `/`', () => {
    const warning = check(`
      root: \`/\`
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Rename the root option to base')
  })

  it('matches "root: \'/foo\'"', () => {
    const warning = check(`
      root: '/foo'
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Rename the root option to base')
  })

  it('matches "root: \'/foo/bar\'"', () => {
    const warning = check(`
      root: '/foo/bar'
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Rename the root option to base')
  })
})
