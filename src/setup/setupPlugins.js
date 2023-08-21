import { pipe } from '../helpers';
import { setup as expressAuth } from 'express-auth-plugin';
import { setup as expressResources } from 'express-resources';
import { setup as signedURL } from 'setup-signed-url';

const setupPlugins = (context) => pipe([
	expressAuth,
	expressResources,
	signedURL,
], context);

export default setupPlugins;
