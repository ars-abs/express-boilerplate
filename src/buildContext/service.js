import { pipeline } from '../helpers';

const service = async (context) => {
	const { log, validate, store } = context;
	const pipes = [log, validate, store];
	const process = pipeline(pipes);

	const response = await process(context);

	return response;
};

export default service;
