import pluginJs from '@eslint/js';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    languageOptions: { globals: globals.browser },
    // pluginJs.configs.recommended,
    // ...tseslint.configs.recommended,
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    ignores: ['dist/**', 'node_modules/**', '.prettierrc'],
    rules: {
      semi: ['error', 'always'],
      'no-unused-vars': ['off'],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      // 'import/first': 'error',
      // 'import/newline-after-import': 'error',
      // 'import/no-duplicates': 'error',
    },
  },
];
