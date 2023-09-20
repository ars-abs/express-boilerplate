import { bdPipe } from '../helpers';

const service = async (context) => {
	const flow = ['log', 'validate', 'store'];
	const response = await bdPipe(context)(flow)(context);

	return response;
};

export default service;
