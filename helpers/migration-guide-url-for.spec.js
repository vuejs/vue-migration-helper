'use strict'

const migrationGuideUrlFor = require('./migration-guide-url-for')

describe('Helper: migration-guide-url-for', () => {
  it('returns the main migration guide for vue', () => {
    expect(
      migrationGuideUrlFor('vue')
    ).toBe('http://vuejs.org/guide/migration.html')
  })

  it('returns a suffixed migration guide for companion libraries', () => {
    expect(
      migrationGuideUrlFor('vue-router')
    ).toBe('http://vuejs.org/guide/migration-vue-router.html')
    expect(
      migrationGuideUrlFor('vuex')
    ).toBe('http://vuejs.org/guide/migration-vuex.html')
  })
})
