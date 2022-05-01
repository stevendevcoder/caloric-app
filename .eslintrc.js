module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
    indent: "off",
    "linebreak-style": [
      "error",
      process.platform === "win32" ? "windows" : "unix",
    ],
    semi: ["error", "always"],
  },
};
