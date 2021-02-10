module.exports = {
    'root': true,
    'env': {
        'browser': true,
        'node': 'true',
        'es6': true
    },
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2020,
        'sourceType': 'module'
    },
    'plugins': ['vue'],
    'rules': {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'max-len': ['warn',
            { 'code': 100, 'ignoreUrls': true }
        ],
        'vue/script-indent': ['warn', 4,
            { 'baseIndent': 1 }
        ],
        'indent': ['warn', 4,
            {
                'SwitchCase': 1,
                'FunctionDeclaration': {
                    'body': 1,
                    'parameters': 2
                }
            }
        ],
        'linebreak-style': ['warn', 'unix'],
        'quotes': ['warn', 'single'],
        'semi': ['warn', 'always'],
        'no-var': ['warn'],
        'no-trailing-spaces': ['warn'],
        'comma-dangle': ['warn', 'never'],
        'eol-last': ['warn', 'always'],
        'brace-style': ['warn', '1tbs', { 'allowSingleLine': true }],
        'prefer-const': ['warn'],
        'no-multiple-empty-lines': ['warn'],
        'space-in-parens': ['warn'],
        'no-use-before-define': ['error']
    },
    'overrides': [
        {
            'files': ['*.vue'],
            'rules': {
                'indent': 'off'
            }
        }
    ]
};
