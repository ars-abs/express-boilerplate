import express from 'express';
import config from '../base/config';
import getRepos from '../getRepos';
import setContext from '../middlewares/setContext';

const buildContext = () => {
	const context = { config: config, repos: getRepos({ config })	};
	const app = express();

	app.use(setContext(context));

	return { ...context, app };
};

export default buildContext;
