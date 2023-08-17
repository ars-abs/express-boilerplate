import 'module-alias/register';
import setupServer from './setup/setupServer';
import setupRoutes from './setup/setupRoutes';
import buildContext from './setup/buildContext';
import setupMiddleWare from './setup/setupMiddleWare';
import setupHooks from './setup/setupHooks';
import { pipe } from './helpers';
import execPlugin from './execPlugin';
import build from './setup/build';

const main = () => pipe([
	build,
	setupMiddleWare,
	setupRoutes,
	setupHooks,
	execPlugin,
	setupServer,
], buildContext());

main();

// for testing
export {
	main,
};
