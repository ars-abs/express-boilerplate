/* The main entry. */

import config from './base/config';
import express from 'express';
import server from './setup/server';
import setupControllers from './setup/setupControllers';
/* Tasks */
const main = () => {
	const app = express();
	const context = { app, config };

	setupControllers(context);
	server(context);
};

main();
export {
	main,
};
