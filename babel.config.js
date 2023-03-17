module.exports = (api) => {
	api.cache(false);
	return {
		plugins: [
			['@babel/plugin-transform-runtime',
				{
					regenerator: true,
				}],
		],
		presets: [
			'@babel/preset-env',
		],
	};
};
