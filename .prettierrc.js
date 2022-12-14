module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 80,
  importOrder: [
    '^(react|react-native)$',
    '<THIRD_PARTY_MODULES>',
    '^@server/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
