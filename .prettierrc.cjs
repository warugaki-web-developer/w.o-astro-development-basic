/** @type {import("prettier").Config} */

module.exports = {
  printWidth: 120,
  semi: true,
  singleQuote: true,
  singleAttributePerLine: true,
  tabWidth: 2,
  useTabs: false,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: ['**/*.css', '**/*.scss'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
