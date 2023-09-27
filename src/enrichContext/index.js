import express from 'express';
import packageInfo from '../../package.json';
import config from '@base/config';
import service from './service';
import constants from '@base/constants';
import { merge, reduce } from '@laufire/utils/collection';

const processRepos = (repoTypes) => reduce(
	config.repos, (
		acc, { type, ...props }, key
	) => (repoTypes[type]
		? merge(acc, { [key]: repoTypes[type](props) })
		: acc), {}
);

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
