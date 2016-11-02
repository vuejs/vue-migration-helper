'use strict'

const path = require('path')
const glob = require('glob')

describe('All rule warnings', () => {
  it('have an appropriate type', () => {
    const files = glob.sync(path.join(__dirname, '/**/*.js'), {
      nodir: true,
      ignore: ['**/*.spec.js']
    })

    files.forEach(file => {
      const rule = require(file)
      expect(rule.warning('', '', '', '', '').type)
        .toMatch(/^(js|template|style|package\.json)$/)
    })
  })
})
