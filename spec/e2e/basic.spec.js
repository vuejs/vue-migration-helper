describe('scanning empty directory', () => {
  it('completes without error', () => {
    const result = runMigrationHelper(['empty'])
    expect(result.error).toBe(undefined)
    expect(result.stderr).toBe('')
    expect(result.stdout).toContain('No deprecated patterns detected')
  })
})

describe('scanning directory with an empty file', () => {
  it('completes without error', () => {
    const result = runMigrationHelper(['empty-file'])
    expect(result.error).toBe(undefined)
    expect(result.stderr).toBe('')
    expect(result.stdout).toContain('No deprecated patterns detected')
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

