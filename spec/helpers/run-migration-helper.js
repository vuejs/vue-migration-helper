'use strict'

const path = require('path')
const spawnSync = require('child_process').spawnSync

global.runMigrationHelper = folders => {
  const results = spawnSync(
    path.join(__dirname, '../../index.js'),
    folders.map(folder => 'spec/fixtures/projects/' + folder),
    {
      cwd: path.join(__dirname, '../..')
    }
  )

  results.stderr = results.stderr.toString()
  results.stdout = results.stdout.toString()

  return results
}
