import configurations from '@openreachtech/eslint-config'
import coreRuleOptionHash from '@openreachtech/eslint-config/lib/configurations/core-rule-option-hash.js'

export default [
  ...configurations,

  // Nothing in this repository can clear the two entries below. Both answer a
  // premise the shared config holds that this package does not meet.
  {
    rules: {
      'no-restricted-syntax': [
        'error',
        // There are 0 or more rest parameters in the array
        // string | { selector: string, message: string }
        ...coreRuleOptionHash['no-restricted-syntax'].spreadOptions
          // This package exists to spy on a constructor, so the constructor of the class
          // it builds has to call the spy.
          .filter(({ selector }) => selector !== 'MethodDefinition[kind=constructor] BlockStatement CallExpression:not([callee.type=Super])'),
      ],

      // Jest injects describe(), test() and expect() into an ES module and does not
      // inject jest, so every file reaching for the object imports it from
      // @jest/globals and shadows the global the shared config declares. Turning
      // that global off instead was tried and is worse: the name is also the type
      // namespace @types/jest declares, and dropping it left every jest.SpyInstance
      // in the JSDoc undefined.
      'no-shadow': [
        'error',
        {
          builtinGlobals: true,
          hoist: 'all',
          ignoreOnInitialization: true,
          allow: [
            ...coreRuleOptionHash['no-shadow'].allow,
            'jest',
          ],
        },
      ],
    },
  },
]
