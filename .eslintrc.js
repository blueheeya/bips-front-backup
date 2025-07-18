module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    // 'no-restricted-imports': [
    //   'error',
    //   {
    //     patterns: ['../*', './*', '../../*'],
    //   }
    // ],
    // 'import/no-unresolved': 'off'
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json'
      }
    }
  }
}