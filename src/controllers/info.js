import packageInfo from '../../package.json';

const info = (req, res) => {
	res.json({
		description: packageInfo.description,
		name: packageInfo.name,
		version: packageInfo.version,
	});
};

export default info;
