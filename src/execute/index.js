import { pipe } from '../helpers';
import setupMiddleWare from './setupMiddleWare';
import executePlugin from './executePlugin';
import setupCatchAll from './setupCatchAll';
import setupServer from './setupServer';

const execute = (context) => pipe([
	setupMiddleWare,
	executePlugin,
	setupCatchAll,
	setupServer,
], context);

export default execute;
