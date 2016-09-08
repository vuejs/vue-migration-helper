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

  it('matches a partial interpolation', () => {
    const warning = check(`
      <a class="btn-{{ type }}"></a>
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Update class="btn-{{ type }}" to v-bind:class="\'btn-\' + type"')
  })
})
