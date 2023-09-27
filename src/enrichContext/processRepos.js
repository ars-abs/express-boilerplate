import config from '@base/config';
import { merge, reduce } from '@laufire/utils/collection';

const processRepos = (repoTypes) => reduce(
	config.repos, (
		acc, { type, ...props }, key
	) => (repoTypes[type]
		? merge(acc, { [key]: repoTypes[type](props) })
		: acc), {}
);

export default processRepos;
