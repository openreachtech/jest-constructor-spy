'use strict'

class ConstructorSpy {
  /**
   * Constructor.
   *
   * @param {ConstructorSpyParams} params - Parameters of constructor.
   */
  constructor ({
    jest,
  }) {
    this.jest = jest
  }

  /**
   * Factory method.
   *
   * @param {ConstructorSpyFactoryParams} params - Parameters of constructor.
   * @returns {ConstructorSpy} - Instance of this class.
   */
  static create (params) {
    return new this(params)
  }

  /**
   * Assign spy to constructor of target class.
   *
   * @template {StandardClass} T
   * @param {T} TargetClass - Target class.
   * @returns {T & { __spy__: jest.SpyInstance }} - Constructor spy class.
   */
  spyOn (TargetClass) {
    const spy = this.jest.fn()

    class SpyClass extends TargetClass {
      constructor (...args) {
        super(...args)

        spy(...args)
      }

      static get __spy__ () {
        return spy
      }
    }

    return SpyClass
  }
}

module.exports = ConstructorSpy

/**
 * @typedef {{
 *   jest: typeof jest,
 * }} ConstructorSpyParams
 */

/**
 * @typedef {ConstructorSpyParams} ConstructorSpyFactoryParams
 */

/**
 * @typedef {new (...args: any[]) => *} StandardClass
 */
