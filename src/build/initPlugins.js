import { merge } from '@laufire/utils/collection';
import { reduceSync } from '../helpers';

const initPlugins = (context) => {
	const { config: { plugins }} = context;
	const init = async (acc, pluginName) => {
		const { init: plugin } = await import(pluginName);
		const { resources = {}, ...rest } = await plugin(acc);

		return merge(
			{}, acc, rest, { config: { resources }}
		);
	};

	return reduceSync(
		plugins, init, context
	);
};

export default initPlugins;
