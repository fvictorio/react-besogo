module.exports = {
  parser:
    '@typescript-eslint/parser',
  parserOptions: {
    extends:
      './tsconfig.json',
    include: [
      '__tests__/**/*.ts',
    ],
    ecmaVersion: 2018,
    sourceType:
      'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: [
    '@typescript-eslint',
    'implicit-dependencies',
  ],
  rules: {
    'no-console':
      'off',
    'no-constant-condition':
      'off',
    'implicit-dependencies/no-implicit': [
      'error',
      {
        peer: true,
        dev: true,
        optional: true,
      },
    ],
    'no-eval':
      'error',
    '@typescript-eslint/no-explicit-any':
      'off',
    '@typescript-eslint/explicit-function-return-type':
      'off',
  },
}
