import { mapAsync, pipe } from '../helpers';

const setupPlugins = async (context) => {
	const { config: { plugins }} = context;
	const setups = await mapAsync(plugins, async (plugin) =>
		(await import(plugin)).setup);

	return pipe(setups, context);
};

export default setupPlugins;
