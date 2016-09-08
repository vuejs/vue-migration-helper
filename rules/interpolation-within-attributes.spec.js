'use strict'

const check = createRuleChecker('interpolation-within-attributes')

describe('Rule: interpolation-within-attributes', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches a simple interpolation', () => {
    const warning = check(`
      <a href="{{ url }}"></a>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Update href="{{ url }}" to v-bind:href="url"')
  })

  it('matches a more complex interpolation', () => {
    const warning = check(`
      <a href="{{ url + 'foo' + bar }}"></a>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Update href="{{ url + \'foo\' + bar }}" to v-bind:href="url + \'foo\' + bar"')
  })

  it('matches a more complex attribute with a more complex interpolation', () => {
    const warning = check(`
      <a data-foo1-6="{{ url + 'foo' + bar }}"></a>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Update data-foo1-6="{{ url + \'foo\' + bar }}" to v-bind:data-foo1-6="url + \'foo\' + bar"')
  })

  it('matches interpolation with a string prefix', () => {
    const warning = check(`
      <a class="btn-{{ type }}"></a>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Update class="btn-{{ type }}" to v-bind:class="\'btn-\' + type"')
  })

  it('matches interpolation with a string suffix', () => {
    const warning = check(`
      <a class="{{ type }}-center"></a>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Update class="{{ type }}-center" to v-bind:class="type + \'-center\'"')
  })

  it('matches interpolation with both a string prefix and string suffix', () => {
    const warning = check(`
      <a class="foo-{{ bar }}-baz"></a>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Update class="foo-{{ bar }}-baz" to v-bind:class="\'foo-\' + bar + \'-baz\'"')
  })

  it('matches multiple interpolations', () => {
    const warning = check(`
      <a class="btn-{{ type }} btn-{{ size }}"></a>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Update class="btn-{{ type }} btn-{{ size }}" to use v-bind with a computed property')
  })
})
