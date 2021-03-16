module.exports = {
    root: true,
    env: {
        // String values
        browser: 'true',
        node: 'false',
        es6: 'true'
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    plugins: ['vue'],
    rules: {
        'no-var': ['warn'],
        'no-use-before-define': ['error'],
        'no-trailing-spaces': ['warn'],
        'no-multiple-empty-lines': ['warn'],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/script-indent': ['warn', 4,
            {
                baseIndent: 1
            }
        ],
        'indent': ['warn', 4,
            {
                SwitchCase: 1,
                FunctionDeclaration: {
                    body: 1,
                    parameters: 2
                }
            }
        ],
        'max-len': ['warn',
            {
                code: 100,
                ignoreUrls: true
            }
        ],
        'linebreak-style': ['warn', 'unix'],
        'quotes': ['warn', 'single'],
        'semi': ['warn', 'always'],
        'comma-dangle': ['warn', 'never'],
        'eol-last': ['warn', 'always'],
        'brace-style': ['warn', '1tbs',
            {
                allowSingleLine: true
            }
        ],
        'prefer-const': ['warn'],
        'space-in-parens': ['warn']
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off'
            }
        }
    ]
};
