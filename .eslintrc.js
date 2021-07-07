module.exports = {
  root: true,
  env: { node: true, es2021: true },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  rules: {
    "no-unused-vars": ["error", { varsIgnorePattern: "^_" }]
  },
  overrides: [
    {
      files: ["./src/**/*.js"],
      extends: ["plugin:react/recommended"],
      env: { browser: true, node: false },
      plugins: ["react"],
      rules: { "react/prop-types": "off" },
      parser: "@babel/eslint-parser",
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 12,
        sourceType: "module"
      }
    },
    {
      files: ["./src/components/**/*.js"],
      rules: { "react/prop-types": 1 }
    }
  ]
};
