import initPlugins from './initPlugins';
import { pipe } from '../helpers';
import setupPlugins from './setupPlugins';
import extendResources from './extendResources';

const build = (context) => pipe([
	initPlugins,
	extendResources,
	setupPlugins,
], context);

export default build;
