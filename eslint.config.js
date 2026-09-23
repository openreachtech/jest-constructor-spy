import configurations from '@openreachtech/eslint-config'

export default [
  ...configurations,

  {
    languageOptions: {
      sourceType: 'module',
    },
  },

  /*
   * Nothing in this repository can clear the two entries below. Both answer a
   * premise the shared config holds that an ES module does not meet.
   */
  {
    rules: {
      // Jest injects describe(), test() and expect() into an ES module and does not
      // inject jest, so every file reaching for the object imports it from
      // @jest/globals and shadows the global the shared config declares. Turning
      // that global off instead was tried and is worse: the name is also the type
      // namespace @types/jest declares, and dropping it left every jest.SpyInstance
      // in the JSDoc undefined. The shared config allows it here for the same
      // reason, and every other option is its own.
      'no-shadow': [
        'error',
        {
          builtinGlobals: true,
          hoist: 'all',
          ignoreOnInitialization: true,
          allow: [
            'it',
            'jest',
            'length',
            'name',
            'status',
            'target',
          ],
        },
      ],

      // The import convention groups imports from farthest to nearest with a blank
      // line between the groups, and sort-imports reads the whole file as one run
      // unless it is told the groups stand apart. Without this, a third-party import
      // whose local name sorts after an application one cannot be written where the
      // convention puts it. Every other option is the shared config's.
      'sort-imports': [
        'error',
        {
          allowSeparatedGroups: true,
          ignoreCase: false,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: [
            'none',
            'all',
            'multiple',
            'single',
          ],
        },
      ],
    },
  },

  // Below this line go the entries waiting on a change to this repository's own
  // code. There are none.
]
