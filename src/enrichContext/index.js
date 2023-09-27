import express from 'express';
import packageInfo from '../../package.json';
import config from '@base/config';
import service from './service';
import constants from '@base/constants';
import { map, merge } from '@laufire/utils/collection';

const enrichContext = (context) => {
	const app = express();
	const info = {
		name: packageInfo.name,
		description: packageInfo.description,
		version: packageInfo.version,
		lastStartTime: new Date(),
	};
	const repos = {};
	const processRepos = (repoTypes) =>
		map(config.repos, ({ type, ...props }) => repoTypes[type](props));

	const defaultContext = {
		app, config, constants, repos, processRepos, info, service,
	} ;

	return merge(
		{}, defaultContext, context
	);
};

export default enrichContext;
