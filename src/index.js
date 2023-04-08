import config from './base/config';
import express from 'express';
import setupServer from './setup/setupServer';
import setupControllers from './setup/setupControllers';

const main = () => {
	const app = express();
	const context = { app, config };

	setupControllers(context);
	setupServer(context);
};

main();

// for testing
export {
	main,
};
