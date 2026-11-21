'use strict'

const ConstructorSpy = require('../lib/ConstructorSpy')

globalThis.constructorSpy = ConstructorSpy.create({
  jest,
})
