import { pipe } from '../helpers';
import setupMiddleWare from './setupMiddleWare';
import execPlugin from './execPlugin';
import setupServer from './setupServer';

const execute = (context) => pipe([
	setupMiddleWare,
	execPlugin,
	setupServer,
], context);

export default execute;
