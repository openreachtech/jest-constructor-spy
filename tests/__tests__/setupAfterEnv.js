'use strict'

const ConstructorSpy = require('../../lib/ConstructorSpy')

describe('setupAfterEnv', () => {
  test('to be presented', () => {
    expect(globalThis.constructorSpy)
      .toBeInstanceOf(ConstructorSpy)
  })
})
