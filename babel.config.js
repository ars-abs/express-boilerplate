module.exports = (api) => {
	api.cache(false);
	return {
		plugins: [
			['@babel/plugin-transform-runtime', { regenerator: true }],
			['babel-plugin-module-resolver', {
				alias: {
					'@base': './src/base',
					'@helpers': './src/helpers',
					'@middlewares': './src/middlewares',
					'@controllers': './src/controllers',
					'@getRepos': './src/getRepos',
					'@setup': './src/setup',
				},
			}],
		],
		presets: ['@babel/preset-env'],
	};
};
