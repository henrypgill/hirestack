/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@hirestack/eslint-config/base.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
