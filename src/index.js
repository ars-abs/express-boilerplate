import config from './base/config';
import express from 'express';
import setupServer from './setup/setupServer';
import setupRoutes from './setup/setupRoutes';
import setupContext from './setup/setupContext';
import { expressResources as setupResources } from 'express-resources';
import { expressAuth as setupAuth } from 'express-auth';
import setupMiddleWares from './setup/setupMiddleWares';
import setupProtectedRoutes from './setup/setupProtectedRoutes';
import getRepos from './getRepos';
import setupHooks from './setup/setupHooks';

const main = async () => {
	const context = {
		app: express(), config: config, repos: getRepos({ config }),
	};

	setupContext(context);
	setupMiddleWares(context);
	setupRoutes(context);
	setupHooks(context);
	await setupResources(context);
	setupAuth(context);
	setupProtectedRoutes(context);
	setupServer(context);
};

main();

// for testing
export {
	main,
};
