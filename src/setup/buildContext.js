import express from 'express';

import config from '@base/config';
import getRepos from '@getRepos';
import enrichReq from '@middlewares/enrichReq';

const buildContext = () => {
	const app = express();
	const repos = getRepos({ config });
	const context = { app, config, repos } ;

	app.use(enrichReq(context));

	return context;
};

export default buildContext;
