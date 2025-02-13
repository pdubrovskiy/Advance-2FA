module.exports = {
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "arrowParens": "always",
  "trailingComma": "es5",
  "bracketSpacing": true,
  "bracketSameLine": false,
  "printWidth": 100,
  "endOfLine": "lf",
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true,
  "importOrderCaseInsensitive": true,
  "importOrderParserPlugins": [
    "classProperties",
    "decorators-legacy",
    "typescript"
  ],
  "importOrder": ["<THIRD_PARTY_MODULES>", "^@/(.*)$", "^../(.*)", "^./(.*)"],
  "plugins": ["@trivago/prettier-plugin-sort-imports"]
}
