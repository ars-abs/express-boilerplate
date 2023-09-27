import { bdPipe } from '../helpers';

const service = async (context) => {
	const { config: { resources }, name } = context;
	const { flow } = resources[name];

	const response = await bdPipe(context)(flow)(context);

	return response;
};

export default service;
