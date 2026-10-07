import { jest } from '@jest/globals'

import ConstructorSpy from './ConstructorSpy.js'

globalThis.constructorSpy = ConstructorSpy.create({
  jest,
})
