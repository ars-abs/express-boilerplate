import { setup } from 'express-auth-plugin';

const setupPlugins = () => {
	const { resources } = setup();

	return {
		config: { resources },
	};
};

export default setupPlugins;
