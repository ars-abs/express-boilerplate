import 'module-alias/register';
import setupServer from './setup/setupServer';
import setupRoutes from './setup/setupRoutes';
import buildContext from './setup/buildContext';
import { expressResources as setupResources } from 'express-resources';
import { expressAuth as setupAuth } from 'express-auth';
import setupMiddleWare from './setup/setupMiddleWare';
import setupProtectedRoutes from './setup/setupProtectedRoutes';
import setupHooks from './setup/setupHooks';

const main = async () => {
	const context = buildContext();

	setupMiddleWare(context);
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
