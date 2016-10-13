'use strict'

const path = require('path')
const spawnSync = require('child_process').spawnSync

global.runMigrationHelper = filesAndOrFolders => {
  const results = spawnSync(
    path.join(__dirname, '../../index.js'),
    filesAndOrFolders.map(filesAndOrFolder => 'spec/fixtures/projects/' + filesAndOrFolder),
    {
      cwd: path.join(__dirname, '../..')
    }
  )

  results.stderr = results.stderr.toString()
  results.stdout = results.stdout.toString()

  return results
}
