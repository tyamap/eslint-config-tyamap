module.exports = {
  parserOptions: {},
  env: {
    browser: true,
  },
  extends: ["eslint:recommended"],
  plugins: [],
  globals: {},
  rules: {
    "no-console": "warn",
    // no-semicolon
    semi: ["error", "never", { beforeStatementContinuationChars: "never" }],
    "semi-spacing": ["error", { after: true, before: false }],
    "semi-style": ["error", "first"],
    "no-extra-semi": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
  },
};
