// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig & import('prettier-plugin-tailwindcss').PluginOptions} */

const config = {
  printWidth: 100,
  semi: false,
  singleQuote: true,
  arrowParens: "avoid",
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: [
    "<BUILTIN_MODULES>",
    "",
    "^react$",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^#/(.*)$",
    "",
    "<TYPES>",
    "",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
};

export default config;
