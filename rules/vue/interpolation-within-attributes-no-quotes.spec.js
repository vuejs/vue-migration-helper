'use strict'

const check = createRuleChecker('vue/interpolation-within-attributes-no-quotes')

describe('Rule: interpolation-within-attributes-no-quotes', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match a simple interpolation with quotes', () => {
    const warning = check(`
      <a href="{{ url }}"></a>
    `)
    expect(warning).toBe(null)
  })

  it('does not match a more complex interpolation with quotes', () => {
    const warning = check(`
      <a href="{{ url + 'foo' + bar }}"></a>
    `)
    expect(warning).toBe(null)
  })

  it('does not match a more complex attribute with a more complex interpolation with quotes', () => {
    const warning = check(`
      <a data-foo1-6="{{ url + 'foo' + bar }}"></a>
    `)
    expect(warning).toBe(null)
  })

  it('does not match interpolation with a string prefix with quotes', () => {
    const warning = check(`
      <a class="btn-{{ type }}"></a>
    `)
    expect(warning).toBe(null)
  })

  it('does not match interpolation with a string suffix with quotes', () => {
    const warning = check(`
      <a class="{{ type }}-center"></a>
    `)
    expect(warning).toBe(null)
  })

  it('does not match interpolation with both a string prefix and string suffix with quotes', () => {
    const warning = check(`
      <a class="foo-{{ bar }}-baz"></a>
    `)
    expect(warning).toBe(null)
  })

  it('does not match multiple interpolations with quotes', () => {
    const warning = check(`
      <a class="btn-{{ type }} btn-{{ size }}"></a>
    `)
    expect(warning).toBe(null)
  })

  it('matches interpolation without quotes', () => {
    const warning = check(`
      <a href="foo" target={{bar}} class="baz"></a>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Update target={{bar}} to v-bind:target="bar"')
  })
})
