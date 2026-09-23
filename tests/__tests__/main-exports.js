import * as mainExports from '../../index.js'

import ConstructorSpy from '../../lib/ConstructorSpy.js'

describe('Classes exported correctly', () => {
  const table = [
    { ExportedClass: ConstructorSpy },
  ]

  test.each(table)('$ExportedClass.name', ({ ExportedClass }) => {
    expect(mainExports)
      .toHaveProperty(ExportedClass.name, ExportedClass)
  })
})
