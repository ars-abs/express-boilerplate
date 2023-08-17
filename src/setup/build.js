import { expressResources as setupResources } from 'express-resources';
import setupPlugins from './setupPlugin';
import { pipe } from '../helpers';

const build = (context) => pipe([
	setupPlugins,
	setupResources,
], context);

export default build;
