import { pipe } from '../helpers';
import setupMiddleWare from './setupMiddleWare';
import execPlugin from './execPlugin';
import setupServer from './setupServer';
import setupCatchAll from '../setupCatchAll';

const execute = (context) => pipe([
	setupMiddleWare,
	execPlugin,
	setupCatchAll,
	setupServer,
], context);

export default execute;
