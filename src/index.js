/* The main entry. */

import config from './base/config';
import express from 'express';
import server from './setup/server';

/* Tasks */
const main = () => {
	const context = {
		app: express(),
		config: config,
	};

	server(context);
};

main();
export {
	main,
};
