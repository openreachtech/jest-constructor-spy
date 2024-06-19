import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const ConstructorSpy = require('../lib/ConstructorSpy')

globalThis.constructorSpy = ConstructorSpy.create({
  jest,
})
