'use strict'

const check = createRuleChecker('vm-dom-methods')

describe('Rule: vm-dom-methods', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('matches this.$appendTo(myEl)', () => {
    const warning = check(`
      this.$appendTo(myEl)
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace this.$appendTo(myEl) with myEl.appendChild(this.$el)')
  })

  it('matches this.$appendTo("#my-el")', () => {
    const warning = check(`
      this.$appendTo("#my-el")
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace this.$appendTo("#my-el") with document.querySelector("#my-el").appendChild(this.$el)')
  })

  it('matches vm.$appendTo("#my-el")', () => {
    const warning = check(`
      vm.$appendTo("#my-el")
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace vm.$appendTo("#my-el") with document.querySelector("#my-el").appendChild(vm.$el)')
  })

  it('matches self.$appendTo("#my-el")', () => {
    const warning = check(`
      self.$appendTo("#my-el")
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace self.$appendTo("#my-el") with document.querySelector("#my-el").appendChild(self.$el)')
  })

  it('matches this.$before(myEl)', () => {
    const warning = check(`
      this.$before(myEl)
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace this.$before(myEl) with myEl.parentNode.insertBefore(this.$el, myEl)')
  })

  it('matches this.$after(myEl)', () => {
    const warning = check(`
      this.$after(myEl)
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace this.$after(myEl) with myEl.parentNode.insertBefore(this.$el, myEl.nextSibling)')
  })

  it('matches this.$remove(myEl)', () => {
    const warning = check(`
      this.$remove(myEl)
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace this.$remove(myEl) with this.$el.remove()')
  })
})
