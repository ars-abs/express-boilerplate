import { map } from '@laufire/utils/collection';
import repoTypes from './repoTypes';

const getRepos = ({ config: { repos }}) =>
	map(repos, ({ type, ...props }) => repoTypes[type](props));

export default getRepos;
