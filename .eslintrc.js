module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: ['@flybywiresim/eslint-config'],
    rules: {
        'import/no-unresolved': 'off',
        'no-undef': 'off',
        'no-nested-ternary': 'off',
        'linebreak-style': 'off',
    },
};
