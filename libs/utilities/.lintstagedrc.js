// https://github.com/okonet/lint-staged#how-can-i-ignore-files-from-eslintignore-

const { ESLint } = require('eslint');
const filterAsync = require('node-filter-async').default;

const eslintCli = new ESLint();

const removeIgnoredFiles = async (files) => {
	const filteredFiles = await filterAsync(files, async (file) => {
		const isIgnored = await eslintCli.isPathIgnored(file);
		return !isIgnored;
	});
	return filteredFiles.join(' ');
};

module.exports = {
	'**/*.{ts,tsx,js,jsx}': async (files) => {
		const filesToLint = await removeIgnoredFiles(files);
		return [`eslint --fix --max-warnings=0 ${filesToLint}`];
	},
};
