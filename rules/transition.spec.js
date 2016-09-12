'use strict'

const check = createRuleChecker('transition')

describe('Rule: transition', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match a transition element', () => {
    const warning = check(`
      <transition><p></p></transition>
    `)
    expect(warning).toBe(null)
  })

  it('does not match a transition element with a name that has "transition" in it', () => {
    const warning = check(`
      <transition name="demo-transition">
    `)
    expect(warning).toBe(null)
  })

  it('does not match a CSS transition property', () => {
    const warning = check(`
      transition: all 1s;
    `)
    expect(warning).toBe(null)
  })

  it('does not match "<p class="tip">It\'s also a good idea to explicitly add `v-bind:css="false"` for JavaScript-only transitions so that Vue can skip the CSS detection. This also prevents CSS rules from accidentally interfering with the transition.</p>"', () => {
    const warning = check(`
      <p class="tip">It's also a good idea to explicitly add \`v-bind:css="false"\` for JavaScript-only transitions so that Vue can skip the CSS detection. This also prevents CSS rules from accidentally interfering with the transition.</p>
    `)
    expect(warning).toBe(null)
  })

  it('matches an empty transition attribute', () => {
    const warning = check(`
      <p transition>foo</p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace transition attribute with either a <transition> or <transition-group> wrapper component')
  })

  it('matches a empty transition attribute', () => {
    const warning = check(`
      <p transition="fade">foo</p>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace transition="fade" attribute with either a <transition name="fade"> or <transition-group name="fade"> wrapper component')
  })
})
