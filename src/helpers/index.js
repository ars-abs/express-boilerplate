import { keys, length, map,
	merge, shell, values } from '@laufire/utils/collection';
import { isArray } from '@laufire/utils/reflection';
import { identity } from '@laufire/utils/fn';

const reduceSync = async (
	collection, reducer, initial,
) => {
	let acc = initial;

	const indexes = keys(collection);
	const indexLength = indexes.length;

	for(let i = 0; i < indexLength; i++) {
		const index = indexes[i];

		// eslint-disable-next-line no-await-in-loop
		acc = await reducer(
			acc, collection[index], index, collection,
		);
	}

	return acc;
};
const runSteps = (steps, data) => reduceSync(
	steps, (acc, step) => {
		step(acc);
		return acc;
	}, data
);

const pipe = (pipes, data) => reduceSync(
	pipes, async (acc, c) => merge(
		{}, acc, await c(acc) || {}
	), data,
);

const wrapAsArray = (data) => (isArray(data) ? data : [data]);

// eslint-disable-next-line max-lines-per-function
const bdPipe = (pipes) => (flow) => async (context) => {
	let cursor = 0;
	let result = {};

	const next = async (props = {}) => {
		const currentPipe = flow[cursor++];
		const pipeFn = pipes[currentPipe] || identity;

		const pipeResult = await pipeFn({
			...result, ...props, ...context, next,
		});

		result = { ...result, ...pipeResult };

		return result;
	};

	result = await next(context);

	const { next: ignored, ...rest } = result;

	return rest;
};

const mapAsync = async (collection, cb) => {
	const collectionKeys = keys(collection);
	const ret = shell(collection);
	const res = await Promise.all(values(map(collection, cb)));
	let index = 0;
	const collectionLength = length(collectionKeys);

	for(let i = 0; i < collectionLength; i++) {
		ret[collectionKeys[i]] = res[index];
		index++;
	}
	return ret;
};

export {
	reduceSync,
	runSteps,
	pipe,
	wrapAsArray,
	bdPipe,
	mapAsync,
};
