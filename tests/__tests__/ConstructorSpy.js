import {
  jest as jestClient,
} from '@jest/globals'

import ConstructorSpy from '../../lib/ConstructorSpy.js'

describe('ConstructorSpy', () => {
  describe('constructor', () => {
    describe('to keep property', () => {
      test('#jest', () => {
        const generator = new ConstructorSpy({ jest: jestClient })

        expect(generator.jest)
          .toBe(jestClient) // same reference.
      })
    })
  })
})

describe('ConstructorSpy', () => {
  describe('.create()', () => {
    test('instance of', () => {
      const generator = ConstructorSpy.create({ jest: jestClient })

      expect(generator)
        .toBeInstanceOf(ConstructorSpy)
    })

    test('call constructor', () => {
      const SpiedConstructorSpy = ConstructorSpy.create({ jest: jestClient })
        .spyOn(ConstructorSpy)

      const params = { jest: jestClient }

      SpiedConstructorSpy.create(params)

      expect(SpiedConstructorSpy.__spy__)
        .toHaveBeenCalledWith(params)
    })
  })
})

describe('ConstructorSpy', () => {
  describe('#spyOn()', () => {
    describe('spy works', () => {
      const generator = ConstructorSpy.create({ jest: jestClient })

      /**
       * Spy target class.
       *
       * @class
       */
      class Target {
        /**
         * Constructor.
         *
         * @param {Array<*>} params - Params of this constructor.
         */
        constructor (...params) {
          this.params = params
        }

        /**
         * Factory method.
         *
         * @param {Array<*>} params - Params of this constructor.
         * @returns {*} - Instance of this class.
         */
        static create (...params) {
          return new this(...params)
        }
      }

      const table = [
        {
          tallyParams: [
            // empty
          ],
        },
        {
          tallyParams: [
            Symbol('tally'),
          ],
        },
        {
          tallyParams: [
            Symbol('tally first'),
            Symbol('tally second'),
          ],
        },
      ]

      test.each(table)('params length: $tallyParams.length', ({ tallyParams }) => {
        const SpyKit = generator.spyOn(Target)

        SpyKit.create(...tallyParams)

        expect(SpyKit.__spy__)
          .toHaveBeenCalledWith(...tallyParams)

        SpyKit.__spy__.mockRestore()
      })
    })
  })
})
