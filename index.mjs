import module from 'module'
const require = module.createRequire(import.meta.url)

const ConstructorSpy = require('./lib/ConstructorSpy')

export {
  ConstructorSpy,
}

export default {
  ConstructorSpy,
}
