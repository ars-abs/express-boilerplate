import express from 'express';
import packageInfo from '../../package.json';
import constants from '@base/constants';
import { merge } from '@laufire/utils/collection';
import genRepos from './genRepos';
import service from './service';

const enrichContext = (context) => {
	const app = express();
	const info = {
		name: packageInfo.name,
		description: packageInfo.description,
		version: packageInfo.version,
		lastStartTime: new Date(),
	};
	const repos = {};
	const processRepos = genRepos(context);

	const defaultContext = {
		app, constants, repos, processRepos, info, service,
	};

	return merge(
		{}, defaultContext, context
	);
};

export default enrichContext;
