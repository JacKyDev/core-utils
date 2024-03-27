module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsdoc/recommended-typescript-error',
    'plugin:security/recommended-legacy',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',

    'jsdoc/tag-lines': ['error', 'any', { startLines: 1 }],
    'jsdoc/sort-tags': [
      'error',
      {
        linesBetween: 1,
        tagSequence: [
          { tags: ['deprecated'] },
          { tags: ['param'] },
          { tags: ['returns'] },
          { tags: ['example'] },
        ],
      },
    ],
    'jsdoc/require-jsdoc': [
      'error',
      {
        require: {
          ArrowFunctionExpression: true,
        },
      },
    ],

    'security/detect-non-literal-fs-filename': 'off', // Too many false positives
    'security/detect-object-injection': 'off', // for paranoiac misleading

    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
