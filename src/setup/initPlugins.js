import { init as expressAuth } from 'express-auth-plugin';
import { init as signedURL } from 'setup-signed-url';
import { init as expressResources } from 'express-resources';
import { merge } from '@laufire/utils/collection';
import { reduceSync } from '../helpers';

const initPlugins = (context) => {
	const plugins = [
		expressAuth,
		signedURL,
		expressResources,
	];

	return reduceSync(
		plugins, async (acc, plugin) => {
			const { resources, ...rest } = await plugin(acc);

			return merge(
				{}, acc, { ...rest, config: { resources }}
			);
		}, context
	);
};

export default initPlugins;
