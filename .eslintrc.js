module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
    jest: true,
  },
  extends: ['standard-with-typescript', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: "tsconfig.json",
    tsconfigRootDir: __dirname
  },
  rules: {
    "@typescript-eslint/array-type": "off"
  }
}
