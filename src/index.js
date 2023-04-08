import config from './base/config';
import express from 'express';
import setupServer from './setup/setupServer';
import setupControllers from './setup/setupControllers';
import setupContext from './setup/setupContext';

const main = () => {
	const app = express();
	const context = { app, config };

	setupContext(context);
	setupControllers(context);
	setupServer(context);
};

main();

// for testing
export {
	main,
};
