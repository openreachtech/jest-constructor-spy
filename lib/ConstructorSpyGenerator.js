'use strict'

class ConstructorSpyGenerator {
  /**
   * Constructor.
   *
   * @param {ConstructorSpyGeneratorParams} params - Parameters of constructor.
   */
  constructor ({
    jest,
  }) {
    this.jest = jest
  }

  /**
   * Factory method.
   *
   * @param {ConstructorSpyGeneratorParams} params - Parameters of constructor.
   * @returns {ConstructorSpyGenerator} - Instance of this class.
   */
  static create (params) {
    return new this(params)
  }

  /**
   * Generate constructor spy kit class.
   *
   * @template {StandardClass} T
   * @param {T} TargetClass - Target class.
   * @returns {T & { __spy__: jest.SpyInstance }} - Constructor spy class.
   */
  generateSpyKitClass (TargetClass) {
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

module.exports = ConstructorSpyGenerator

/**
 * @typedef {{
 *   jest: Object,
 * }} ConstructorSpyGeneratorParams
 */

/**
 * @typedef {new (...args: any[]) => *} StandardClass
 */
