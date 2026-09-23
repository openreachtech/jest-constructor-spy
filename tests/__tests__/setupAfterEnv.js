import ConstructorSpy from '../../lib/ConstructorSpy.js'

describe('setupAfterEnv', () => {
  test('to be presented', () => {
    expect(globalThis.constructorSpy)
      .toBeInstanceOf(ConstructorSpy)
  })
})
