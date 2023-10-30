'use strict'

/**
 * Constructor spy generator.
 *
 * @class
 */
class ConstructorSpy {
  /**
   * Constructor.
   *
   * @param {ConstructorSpyParams} params - Parameters of constructor.
   */
  constructor ({
    jest: globalJest,
  }) {
    this.jest = globalJest
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

    const SpyClass = class extends TargetClass {
      /**
       * Constructor of SpyClass.
       *
       * @param {Array<any>} args - Pass-through arguments.
       */
      constructor (...args) {
        super(...args)

        spy(...args)
      }

      /**
       * get: Spy instance.
       *
       * @returns {jest.SpyInstance}
       */
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
