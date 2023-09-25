module.exports = {
  "env": {
    "es2021": true
  },
  "extends": [
    "standard-with-typescript",
    "plugin:react/recommended"
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    semi: 0,
    'react/prop-types': 0,
    'react/display-name': 0,
    'no-return-assign': 0,
    'no-unused-vars': 1,
    'no-useless-escape': 0,
    'no-unmodified-loop-condition': 0,
    'no-use-before-define': 'off',
    'camelcase': 'off',
    'no-undef': 'off',
    'array-callback-return': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-use-before-define': ['off'],
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    '@typescript-eslint/ban-types': ['off'],
    '@typescript-eslint/ban-ts-comment': ['off']
  }
}
