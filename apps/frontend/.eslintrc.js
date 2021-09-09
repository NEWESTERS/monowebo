// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-config/patch/modern-module-resolution');

module.exports = {
	extends: [
		'@rushstack/eslint-config/profile/web-app',
		'@rushstack/eslint-config/mixins/react',
		'@rushstack/eslint-config/mixins/tsdoc',
		'plugin:react-hooks/recommended',
	],
	parserOptions: { tsconfigRootDir: __dirname },
	settings: {
		react: {
			version: '17.0',
		},
	},
	ignorePatterns: ['**/*.js', '**/*.mjs', '**/*.stories.*'],
	rules: {
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'interface',
				format: ['PascalCase'],
				custom: {
					regex: '^I[A-Z]',
					match: false,
				},
			},
		],
		'react/jsx-no-bind': [
			'error',
			{
				allowArrowFunctions: true,
				allowFunctions: true,
			},
		],
		// Флаг "strict" в tsconfig включает в себя правило "noImplicitAny"
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md#when-not-to-use-it
		'@rushstack/typedef-var': 'off',
	},
};
