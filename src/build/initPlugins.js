import { merge } from '@laufire/utils/collection';
import { reduceSync } from '../helpers';

const defaultMiddleware = (
	req, res, next
) => next();

const initPlugins = (context) => {
	const { config: { plugins }} = context;
	const init = async (acc, pluginPath, name) => {
		const { init: plugin } = await import(pluginPath);
		const {
			resources = {},
			middleware = defaultMiddleware,
			...rest
		} = await plugin(acc);

		return merge(
			{}, acc, rest,
			{ config: { resources }},
			{ middlewares: { [name]: middleware }}
		);
	};

	return reduceSync(
		plugins, init, context
	);
};

export default initPlugins;
