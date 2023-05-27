'use strict'

const ConstructorSpyGenerator = require('../../lib/ConstructorSpyGenerator')

describe('ConstructorSpyGenerator', () => {
  describe('constructor', () => {
    describe('to keep property', () => {
      test('#jest', () => {
        const generator = new ConstructorSpyGenerator({ jest })

        expect(generator.jest)
          .toBe(jest) // same reference.
      })
    })
  })
})

describe('ConstructorSpyGenerator', () => {
  describe('.create()', () => {
    test('instance of', () => {
      const generator = ConstructorSpyGenerator.create({ jest })

      expect(generator)
        .toBeInstanceOf(ConstructorSpyGenerator)
    })

    test('call constructor', () => {
      const constructorSpy = jest.fn()

      class DerivedClass extends ConstructorSpyGenerator {
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

describe('ConstructorSpyGenerator', () => {
  describe('#generateSpyKitClass()', () => {
    describe('spy works', () => {
      const generator = ConstructorSpyGenerator.create({ jest })

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
        const SpyKit = generator.generateSpyKitClass(Target)

        SpyKit.create(...tallyParams)

        expect(SpyKit.__spy__)
          .toHaveBeenCalledWith(...tallyParams)

        SpyKit.__spy__.mockRestore()
      })
    })
  })
})
