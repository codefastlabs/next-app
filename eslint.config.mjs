import { config } from '@codefast/eslint-config/next';
import query from '@tanstack/eslint-plugin-query';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...config,
  ...query.configs['flat/recommended'],
  {
    rules: {
      'unicorn/no-process-exit': 'off',
    },
  },
];
