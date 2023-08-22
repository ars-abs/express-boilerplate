import initPlugins from '../setup/initPlugins';
import { pipe } from '../helpers';
import setupPlugins from '../setup/setupPlugins';

const build = (context) => pipe([
	initPlugins,
	setupPlugins,
], context);

export default build;
