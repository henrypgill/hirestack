/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@hirestack/eslint-config/nest.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
