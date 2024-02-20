module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  root: true,
  plugins: ["react-hooks", "@babel", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "import/prefer-default-export": "off",
    "no-prototype-builtins": 0,
    "react/require-default-props": 2,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": 0,
    "react/display-name": 0,
  },
};
