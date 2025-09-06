import path from 'path';
import stylistic from '@stylistic/eslint-plugin';
import tseslint, { parser } from 'typescript-eslint';

const stylisticRules: Partial<Record<string, any>> = {
  '@stylistic/block-spacing': 'error',
  '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 1 }],
  '@stylistic/array-bracket-spacing': ['error', 'never'],
  '@stylistic/comma-dangle': ['error', 'never'],
  '@stylistic/indent': ['error', 2],
  '@stylistic/max-len': ['error', {
    code: 120,
    ignoreUrls: true,
    ignoreComments: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
    ignoreRegExpLiterals: true
  }],
  '@stylistic/no-trailing-spaces': 'error',
  '@stylistic/curly-newline': ['error', { minElements: 1 }],
  '@stylistic/max-statements-per-line': ['error', { max: 2 }],
  '@stylistic/object-property-newline': ['error'],
  '@stylistic/rest-spread-spacing': ['error', 'never'],
  '@stylistic/semi': ['error', 'always'],
  '@stylistic/space-before-blocks': 'error',
  '@stylistic/object-curly-newline': ['error', {
    ObjectExpression: {
      multiline: true,
      consistent: true,
      minProperties: 3
    },
    ObjectPattern: {
      multiline: true,
      consistent: true,
      minProperties: 3
    },
    ImportDeclaration: 'never'
  }],
  '@stylistic/eol-last': ['error', 'always'],
  '@stylistic/quotes': ['error', 'single', { avoidEscape: true }]
};

export default tseslint.config(
  stylistic.configs.recommended,
  {
    files: ['src/**/*.ts', 'src/**/*.js', 'eslint.config.ts'],
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      ...stylisticRules
    },
    languageOptions: {
      parser,
      parserOptions: {
        project: [path.resolve(process.cwd(), 'tsconfig.json')],
        tsconfigRootDir: path.resolve(process.cwd())
      }
    }
  }
);
