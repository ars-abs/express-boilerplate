import express from 'express';
import packageInfo from '../../package.json';
import config from '@base/config';
import constants from '@base/constants';
import { merge } from '@laufire/utils/collection';
import processRepos from './processRepos';
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

	const defaultContext = {
		app, config, constants, repos, processRepos, info, service,
	};

	return merge(
		{}, defaultContext, context
	);
};

export default enrichContext;
