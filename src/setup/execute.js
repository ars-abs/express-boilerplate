import execPlugin from '../execPlugin';
import { pipe } from '../helpers';
import setupHooks from './setupHooks';
import setupMiddleWare from './setupMiddleWare';
import setupRoutes from './setupRoutes';
import setupServer from './setupServer';

const execute = (context) => pipe([
	setupMiddleWare,
	setupRoutes,
	setupHooks,
	execPlugin,
	setupServer,
], context);

export default execute;
