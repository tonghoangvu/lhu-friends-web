module.exports = {
    'root': true,
    'env': {
        'node': true
    },
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended'
    ],
    'parserOptions': {
        'ecmaVersion': 2020
    },
    'rules': {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'max-len': [
            'warn',
            {
                'code': 100,
                'ignoreUrls': true
            }
        ],
        'vue/script-indent': [
            'warn',
            4,
            {
                'baseIndent': 1
            }
        ],
        'indent': [
            'warn',
            4,
            {
                'SwitchCase': 1,
                'FunctionDeclaration': {
                    'body': 1,
                    'parameters': 2
                }
            }
        ],
        'linebreak-style': [
            'warn',
            'unix'
        ],
        'quotes': [
            'warn',
            'single'
        ],
        'semi': [
            'warn',
            'always'
        ]
    },
    'overrides': [
        {
            'files': [
                '*.vue'
            ],
            'rules': {
                'indent': 'off'
            }
        }
    ],
};
