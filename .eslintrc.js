module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    commonjs: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:json/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['coverage', 'node_modules'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:json/recommended',
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:prettier/recommended',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      rules: {
        'max-len': 'off',
        'no-else-return': ['error', { allowElseIf: false }],
        'newline-before-return': 'error',
        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
        '@typescript-eslint/ban-tslint-comment': 'error',
        '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { prefer: 'type-imports' },
        ],
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-confusing-void-expression': 'error',
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',

        // arguable rule
        // "@typescript-eslint/prefer-readonly-parameter-types": "error",
        '@typescript-eslint/default-param-last': 'error',
        '@typescript-eslint/no-inferrable-types': [
          'warn',
          {
            ignoreParameters: true,
            ignoreProperties: true,
          },
        ],
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-dupe-class-members': 'error',
        'no-duplicate-imports': 'off',
        '@typescript-eslint/no-duplicate-imports': 'error',
        'no-extra-parens': 'off',
        'no-invalid-this': 'off',
        '@typescript-eslint/no-invalid-this': 'error',
        'no-loop-func': 'off',
        '@typescript-eslint/no-loop-func': ['error'],
        'no-loss-of-precision': 'off',
        '@typescript-eslint/no-loss-of-precision': ['error'],
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': ['error'],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'no-throw-literal': 'off',
        '@typescript-eslint/no-throw-literal': ['error'],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': ['error'],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'require-await': 'off',
        '@typescript-eslint/require-await': 'error',
        'no-return-await': 'off',
        '@typescript-eslint/return-await': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        camelcase: [
          'error',
          {
            allow: [
              'access_token',
              'expires_in',
              'refresh_token',
              'refresh_expires_in',
              'token_type',
              'session_state',
              'client_id',
              'client_secret',
              'grant_type',
              'redirect_uri',
              'decimal_digits',
              'email_verified',
              'preferred_username',
              'given_name',
              'family_name',
              'user_info',
            ],
          },
        ],
        'consistent-return': ['off'],
      },
    },
    {
      files: ['**/*.spec.ts'],
      rules: {},
    },
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'json', 'jest', 'prettier'],
  rules: {},
  settings: {
    jest: {
      version: 27,
    },
  },
};
