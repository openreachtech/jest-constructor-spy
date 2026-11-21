import {
  jest as jestClient,
} from '@jest/globals'

import ConstructorSpy from '../lib/ConstructorSpy.js'

globalThis.constructorSpy = ConstructorSpy.create({
  jest: jestClient,
})
