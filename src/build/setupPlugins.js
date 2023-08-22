import { pipe } from '../helpers';
import { setup as expressAuth } from 'express-auth-plugin';
import { setup as expressResources } from 'express-resources';
import { setup as signedURL } from 'setup-signed-url';
import { setup as schema } from 'express-resources-schema';
import { setup as info } from 'health-check';

const setupPlugins = (context) => pipe([
	expressAuth,
	expressResources,
	signedURL,
	schema,
	info,
], context);

export default setupPlugins;
