'use strict'

const check = createRuleChecker('vuex/store-event-emitter')

describe('Rule: store-event-emitter', () => {
  it('does not match an empty line', () => {
    const warning = check('')
    expect(warning).toBe(null)
  })

  it('does not match store.watch', () => {
    const warning = check(`
      store.watch
    `)
    expect(warning).toBe(null)
  })

  it('does not match store.once', () => {
    const warning = check(`
      store.watch
    `)
    expect(warning).toBe(null)
  })

  it('matches store.on', () => {
    const warning = check(`
      store.on
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace store.on with store.subscribe or eventBus.on, creating the eventBus from an empty Vue instance (see the link below for details)')
  })

  it('matches store.on(', () => {
    const warning = check(`
      store.on(
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace store.on with store.subscribe or eventBus.on, creating the eventBus from an empty Vue instance (see the link below for details)')
  })

  it('matches store.emit', () => {
    const warning = check(`
      store.emit
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace store.emit with eventBus.emit, creating the eventBus from an empty Vue instance (see the link below for details)')
  })

  it('matches store.off', () => {
    const warning = check(`
      store.off
    `)
    expect(warning).toBeTruthy()
    expect(warning.fix).toBe('Replace store.off with eventBus.off, creating the eventBus from an empty Vue instance (see the link below for details)')
  })
})
