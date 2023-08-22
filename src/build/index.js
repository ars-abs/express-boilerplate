import initPlugins from './initPlugins';
import { pipe } from '../helpers';
import setupPlugins from './setupPlugins';

const build = (context) => pipe([
	initPlugins,
	setupPlugins,
], context);

export default build;
