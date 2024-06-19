import ConstructorSpy from '../lib/ConstructorSpy'

declare module '@openreachtech/jest-constructor-spy' {
  const ConstructorSpy: typeof ConstructorSpy

  export = ConstructorSpy
}
