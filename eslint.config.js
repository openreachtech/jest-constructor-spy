import {
  default as configurations,
  coreRuleOptionHash,
} from '@openreachtech/eslint-config'

export default [
  ...configurations,

  {
    // The spy class has to record the arguments it receives, and it does so in its own constructor.
    files: [
      'lib/ConstructorSpy.js',
    ],
    rules: {
      'no-restricted-syntax': [
        'error',
        // There are 0 or more rest parameters in the array
        // string | { selector: string, message: string }
        ...coreRuleOptionHash['no-restricted-syntax'].spreadOptions
          .filter(it => it.selector !== 'MethodDefinition[kind=constructor] BlockStatement CallExpression:not([callee.type=Super])'), // Kick out `Do not call methods or functions in constructor`
      ],
    },
  },
]
