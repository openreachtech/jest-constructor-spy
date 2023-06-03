'use strict'

const ConstructorSpy = require('../ConstructorSpy')

globalThis.constructorSpy = ConstructorSpy.create({
  jest,
})
