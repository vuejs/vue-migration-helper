'use strict'

const check = createRuleChecker('vuex/store-watch-with-string')

describe('Rule: store-watch-with-string', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match store.watch with no arguments', () => {
    const warning = check(`
      store.watch(
    `)
    expect(warning).toBe(null)
  })

  it('does not match store.watch with arrow function arg', () => {
    const warning = check(`
      store.watch(state => {
    `)
    expect(warning).toBe(null)
  })

  it('does not match store.watch with regular function arg', () => {
    const warning = check(`
      store.watch(function (state) {
    `)
    expect(warning).toBe(null)
  })

  it('matches store.watch with a string argument', () => {
    const warning = check(`
      store.watch('user.notifications', callback)
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Update store.watch to use a function rather than a string path for the first argument (see link below for an example)')
  })

  it('matches store.watch with a string argument and a bunch of spaces', () => {
    const warning = check(`
      store . watch ( 'user.notifications' , callback)
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Update store.watch to use a function rather than a string path for the first argument (see link below for an example)')
  })

  it('matches store.watch with a string argument using double quotes', () => {
    const warning = check(`
      store.watch('user.notifications', callback)
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Update store.watch to use a function rather than a string path for the first argument (see link below for an example)')
  })

  it('matches store.watch with a string argument using backticks', () => {
    const warning = check(`
      store.watch(\`user.notifications\`, callback)
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Update store.watch to use a function rather than a string path for the first argument (see link below for an example)')
  })
})
