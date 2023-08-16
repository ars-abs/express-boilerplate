import { setup } from 'express-auth-plugin';
import { setup as setupSignedURL } from 'setup-signed-url';
import { reduce, merge } from '@laufire/utils/collection';

const setupPlugins = (context) => {
	const setups = [setup, setupSignedURL];

	const result = reduce(
		setups, (acc, fn) => {
			const { routes, resources } = fn(context);

			return merge(
				{}, acc, { routes: routes, config: { resources }}
			);
		}, {}
	);

	return result;
};

export default setupPlugins;
