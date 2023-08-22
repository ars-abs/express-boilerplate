import execPlugin from '../execPlugin';
import { pipe } from '../helpers';
import setupHooks from '../setup/setupHooks';
import setupMiddleWare from '../setup/setupMiddleWare';
import setupRoutes from '../setup/setupRoutes';
import setupServer from '../setup/setupServer';

const execute = (context) => pipe([
	setupMiddleWare,
	setupRoutes,
	setupHooks,
	execPlugin,
	setupServer,
], context);

export default execute;
