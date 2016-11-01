describe('scanning empty directory', () => {
  it('completes without error', () => {
    const result = runMigrationHelper(['empty'])
    expect(result.error).toBe(undefined)
    expect(result.stderr).toBe('')
    expect(result.stdout).toContain('No obsolete syntax was detected')
  })
})

describe('scanning directory with an empty file', () => {
  it('completes without error', () => {
    const result = runMigrationHelper(['empty-file'])
    expect(result.error).toBe(undefined)
    expect(result.stderr).toBe('')
    expect(result.stdout).toContain('No obsolete syntax was detected')
  })
})

describe('scanning directory with a simple js file', () => {
  it('completes without error', () => {
    const result = runMigrationHelper(['simple'])
    expect(result.error).toBe(undefined)
    expect(result.stderr).toBe('')
    expect(result.stdout).toContain('1. ')
  })
})

describe('scanning a simple js file', () => {
  it('completes without error', () => {
    const result = runMigrationHelper(['simple/main.js'])
    expect(result.error).toBe(undefined)
    expect(result.stderr).toBe('')
    expect(result.stdout).toContain('1. ')
  })
})

describe('scanning a directory of files with matching but ignorable warnings', () => {
  it('completes without error', () => {
    const result = runMigrationHelper(['ignorable'])
    expect(result.error).toBe(undefined)
    expect(result.stderr).toBe('')
    expect(result.stdout).toContain('No obsolete syntax was detected')
  })
})

describe('scanning a directory that includes weird extensions', () => {
  it('completes without error', () => {
    const result = runMigrationHelper(['weird-extension'])
    expect(result.error).toBe(undefined)
    expect(result.stderr).toBe('')
    expect(result.stdout).toContain('No obsolete syntax was detected')
  })
})

describe('scanning a directory that includes package.json', () => {
  it('completes without error', () => {
    const result = runMigrationHelper(['package-json'])
    expect(result.error).toBe(undefined)
    expect(result.stderr).toBe('')
    expect(result.stdout).toContain('No obsolete syntax was detected')
  })
})

