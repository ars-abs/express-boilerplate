import { merge, reduce } from '@laufire/utils/collection';

const genRepos = ({ config: { repos }}) => (repoTypes) => reduce(
	repos, (
		acc, { type, ...props }, key
	) => (repoTypes[type]
		? merge(acc, { [key]: repoTypes[type](props) })
		: acc), {}
);

export default genRepos;
