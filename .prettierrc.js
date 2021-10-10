module.exports = {
  arrowParens: 'always',
  endOfLine: 'lf',
  quoteProps: 'as-needed',
  overrides: [
    {
      files: ['**/*.js', '*.js'],
      options: {
        semi: true,
      },
    },
  ],
  parser: "typescript",
  printWidth: 80,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "all",
}