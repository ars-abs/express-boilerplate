import express from 'express';
import packageInfo from '../../package.json';
import config from '@base/config';
import getRepos from '@getRepos';
import enrichReq from '@middlewares/enrichReq';

const buildContext = () => {
	const app = express();
	const repos = getRepos({ config });
	const info = {
		name: packageInfo.name,
		description: packageInfo.description,
		version: packageInfo.version,
		lastStartTime: new Date(),
	};
	const context = { app, config, repos, info } ;

	app.use(enrichReq(context));

	return context;
};

export default buildContext;
