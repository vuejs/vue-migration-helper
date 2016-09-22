describe('scanning empty directory', () => {
  it('completes without error', () => {
    const result = runMigrationHelper(['empty'])
    expect(result.error).toBe(undefined)
    expect(result.stderr).toBe('')
    expect(result.stdout).toBe('')
  })
})

describe('scanning directory with an empty file', () => {
  it('completes without error', () => {
    const result = runMigrationHelper(['empty-file'])
    expect(result.error).toBe(undefined)
    expect(result.stderr).toBe('')
    expect(result.stdout).toContain('✓ Project\'s files don\'t use deprecated patterns.')
  })
})

describe('scanning directory with a simple js file', () => {
  it('completes without error', () => {
    const result = runMigrationHelper(['simple'])
    expect(result.error).toBe(undefined)
    expect(result.stderr).toBe('')
    expect(result.stdout).toContain('1. ')
    expect(result.stdout).toContain('✖ 1 deprecated patterns detected in 1 out of 1 project\'s files.')
  })
})

