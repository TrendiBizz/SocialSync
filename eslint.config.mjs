// eslint.config.mjs
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  // If you previously extended .eslintrc.json packages, list them here:
  // e.g. recommended configs you want to keep
  // prettier: true,
});

export default [
  // Enable ESLint’s recommended rules
  ...compat.extend('eslint:recommended'),

  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: { '@typescript-eslint': {} },
    rules: {
      // Your project’s custom rules go here:
      // e.g. '@typescript-eslint/no-unused-vars': ['error'],
    },
  },

  // If you’re using Prettier, you could add:
  // ...compat.extend('plugin:prettier/recommended'),
];
