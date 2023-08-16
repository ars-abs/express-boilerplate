import { setup } from 'express-auth-plugin';

const setupPlugins = () => {
	const { resources, routes } = setup();

	return {
		config: { resources },
		routes: routes,
	};
};

export default setupPlugins;
