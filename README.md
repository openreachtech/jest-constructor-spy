# ConstructorSpy for Jest
`ConstructorSpy` is a module designed to spy on the constructor of JavaScript class in Jest. It allows developers to easily track and monitor the usage of the constructor in their Jest tests.

## Installation

* Node.js is required. If it is not installed yet, please do so before proceeding. And more, requires Jest.

* You can install `ConstructorSpy` with the following command:

  ```
  npm install --save-dev @openreachtech/jest-constructor-spy
  ```

## Usage

* When you design a class with factory method, `ConstructorSpy` can test to call constructor from the factory method.

```javascript
const { ConstructorSpy } = require('@openreachtech/jest-constructor-spy')

class Sample {
  constructor (value) {
    this.value
  }

  static createWithDefaultValue () {
    return new this(12000)
  }
}

test('to call constructor with 12000', () => {
  const SpiedSample = ConstructorSpy.create({ jest })
    .spyOn(Sample)

  SpiedSample.createWithDefaultValue()

  expect(SpiedSample.__spy__)
    .toHaveBeenCalledWith(12000)
})
```

## License

* This project is released under the MIT License.<br>
See [here](./LICENSE)

## Contribution

* We welcome bug reports, feature requests, and code contributions. Please feel free to contact us through GitHub Issues or Pull Requests. Your contributions are highly appreciated!

## Authors

* Open Reach Tech inc.

* We strive to meet user expectations and welcome any kind of feedback.
