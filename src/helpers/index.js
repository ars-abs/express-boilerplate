import { keys, merge } from '@laufire/utils/collection';
import { isArray } from '@laufire/utils/reflection';

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

const pipeline = (pipes) =>
	(context) => reduceSync(
		pipes, (acc, fn) => (acc.error ? acc : fn(context)), {}
	);

export {
	reduceSync,
	runSteps,
	pipe,
	wrapAsArray,
	pipeline,
};
