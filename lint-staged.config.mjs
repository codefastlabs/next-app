import path from 'path';

/**
 * Builds an ESLint command with the given filenames.
 *
 * @param {string[]} filenames - An array of filenames to be passed to the
 *   ESLint command.
 * @returns {string} - The generated ESLint command.
 */
function buildEslintCommand(filenames) {
  return `next lint --fix --max-warnings 0 --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;
}

const config = {
  '*': 'prettier --list-different --write --ignore-unknown',
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};

export default config;
