'use strict'

const ConstructorSpy = require('../../lib/ConstructorSpy')

describe('ConstructorSpy', () => {
  describe('constructor', () => {
    describe('to keep property', () => {
      test('#jest', () => {
        const generator = new ConstructorSpy({ jest })

        expect(generator.jest)
          .toBe(jest) // same reference.
      })
    })
  })
})

describe('ConstructorSpy', () => {
  describe('.create()', () => {
    test('instance of', () => {
      const generator = ConstructorSpy.create({ jest })

      expect(generator)
        .toBeInstanceOf(ConstructorSpy)
    })

    test('call constructor', () => {
      const constructorSpy = jest.fn()

      const DerivedClass = class extends ConstructorSpy {
        constructor (params) {
          super(params)

          constructorSpy(params)
        }
      }

      const params = { jest }

      DerivedClass.create(params)

      expect(constructorSpy)
        .toHaveBeenCalledWith(params)
    })
  })
})

describe('ConstructorSpy', () => {
  describe('#spyOn()', () => {
    describe('spy works', () => {
      const generator = ConstructorSpy.create({ jest })

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
         * @returns {Target} - Instance of this class.
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
