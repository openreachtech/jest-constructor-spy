import ConstructorSpy from '../../lib/ConstructorSpy.js'

describe('setup-after-env', () => {
  test('to be presented', () => {
    expect(globalThis.constructorSpy)
      .toBeInstanceOf(ConstructorSpy)
  })
})
