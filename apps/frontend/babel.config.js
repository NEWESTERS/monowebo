module.exports = {
	presets: [
		'@babel/preset-typescript',
		['@babel/preset-react', { runtime: 'automatic' }], // 👈 this is important
		['@babel/preset-env', { targets: { esmodules: true }, bugfixes: true, modules: false }],
	],
};
