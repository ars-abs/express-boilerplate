import { pipe } from '../helpers';
import { setup as expressAuth } from 'express-auth-plugin';
import { setup as expressResources } from 'express-resources';
import { setup as log } from 'log';
import { setup as signedURL } from 'setup-signed-url';
import { setup as schema } from 'express-resources-schema';
import { setup as info } from 'health-check';
import { setup as validate } from 'validate';

const setupPlugins = (context) => pipe([
	expressAuth,
	expressResources,
	log,
	signedURL,
	schema,
	info,
	validate,
], context);

export default setupPlugins;
