import { pipe } from '../helpers';
import setupMiddleWare from './setupMiddleWare';
import setupRoutes from './setupRoutes';
import setupHooks from './setupHooks';
import execPlugin from './execPlugin';
import setupServer from './setupServer';

const execute = (context) => pipe([
	setupMiddleWare,
	setupRoutes,
	setupHooks,
	execPlugin,
	setupServer,
], context);

export default execute;
