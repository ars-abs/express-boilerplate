import express from 'express';
import { expressAuth } from 'express-auth';

import config from '@base/config';
import getRepos from '@getRepos';
import enrichReq from '@middlewares/enrichReq';

const buildContext = () => {
	const app = express();
	const repos = getRepos({ config });
	const protect = expressAuth({ app, config, repos });
	const context = { app, config, repos, protect } ;

	app.use(enrichReq(context));

	return context;
};

export default buildContext;
