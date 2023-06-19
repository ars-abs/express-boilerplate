import 'module-alias/register';
import setupServer from './setup/setupServer';
import setupRoutes from './setup/setupRoutes';
import buildContext from './setup/buildContext';
import { expressResources as setupResources } from 'express-resources';
import { expressAuth as setupAuth } from 'express-auth';
import setupMiddleWare from './setup/setupMiddleWare';
import setupProtectedRoutes from './setup/setupProtectedRoutes';
import setupHooks from './setup/setupHooks';
import { runSteps } from './helpers';

const main = () => runSteps([
	setupMiddleWare,
	setupRoutes,
	setupHooks,
	setupResources,
	setupAuth,
	setupProtectedRoutes,
	setupServer,
], buildContext());

main();

// for testing
export {
	main,
};
