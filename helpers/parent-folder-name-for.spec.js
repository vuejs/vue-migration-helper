'use strict'

const getParentFolderName = require('./parent-folder-name-for')

describe('Helper: parent-folder-name-for', () => {
  it('returns the main migration guide for vue', () => {
    expect(
      getParentFolderName('/Users/fritzc/code/vue-migration-helper/rules/vue/array-prototype-remove.js')
    ).toBe('vue')
  })

  it('returns the main migration guide for vue', () => {
    expect(
      getParentFolderName('C:\\Users\\fuis\\AppData\\Roaming\\npm\\node_modules\\vue-migration-helper\\rules\\vue\\array-prototype-remove.js')
    ).toBe('vue')
  })
})
