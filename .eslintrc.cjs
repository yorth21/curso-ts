module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript'
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType:' module',
        project: './tsconfig.json'
    },
    plugins: [
        'react'
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
    }
}
