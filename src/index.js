import config from './base/config';
import express from 'express';
import setupServer from './setup/setupServer';
import setupRoutes from './setup/setupRoutes';
import setupContext from './setup/setupContext';
import { expressResources as setupResources } from 'express-resources';
import { expressAuth as setupAuth } from 'express-auth';
import setupMiddleWares from './setup/setupMiddleWares';
import setupProtectedRoutes from './setup/setupProtectedRoutes';
// import { map } from '@laufire/utils/collection';
import getRepos from './getRepos';

const main = async () => {
	const app = express();
	const repos = getRepos({ config });
	const context = { app, config, repos };

	setupContext(context);
	setupMiddleWares(context);
	setupRoutes(context);
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
