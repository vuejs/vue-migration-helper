'use strict'

const check = createRuleChecker('html-interpolation')

describe('Rule: html-interpolation', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches a simple interpolation', () => {
    const warning = check(`
      <p>{{{ foo }}}</p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace {{{ foo }}} with v-html="foo" on a containing element')
  })

  it('matches a standalone interpolation', () => {
    const warning = check(`
      {{{ foo }}}
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace {{{ foo }}} with v-html="foo" on a containing element')
  })

  it('matches an interpolation with two on the same line', () => {
    const warning = check(`
      {{{ foo }}} bar {{{ baz }}}
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace {{{ foo }}} with v-html="foo" on a containing element')
  })
})
