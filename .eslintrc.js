module.exports = {
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "jest", "prettier", "import"],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
        singleQuote: false,
      },
    ],
    "linebreak-style": "off",
    "import/prefer-default-export": "off",
    "import/extensions": ["warn", { ts: "never", tsx: "never" }],
    "no-param-reassign": [2, { props: false }],
    "react-hooks/exhaustive-deps": "warn",
    "no-bitwise": 0,
    "import/extensions": ["warn", { ts: "never", tsx: "never" }],
    "no-param-reassign": [2, { props: false }],
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "react/jsx-props-no-spreading": [
      0,
      {
        html: "ignore" | "enforce",
        custom: "ignore" | "enforce",
        explicitSpread: "ignore" | "enforce",
        exceptions: [],
      },
    ],
  },
};
