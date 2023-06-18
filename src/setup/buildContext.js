import express from 'express';
import config from '../base/config';
import getRepos from '../getRepos';
import enrichReq from '../middlewares/enrichReq';

const buildContext = () => {
	const context = { config: config, repos: getRepos({ config })	};
	const app = express();

	app.use(enrichReq(context));

	return { ...context, app };
};

export default buildContext;
