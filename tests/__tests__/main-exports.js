'use strict'

const mainExports = require('../../index')

const ConstructorSpy = require('../../lib/ConstructorSpy')

describe('Classes exported correctly', () => {
  const table = [
    { ExportedClass: ConstructorSpy },
  ]

  test.each(table)('$ExportedClass.name', ({ ExportedClass }) => {
    expect(mainExports)
      .toHaveProperty(ExportedClass.name, ExportedClass)
  })
})
