/* Mocks and Stubs */
jest.mock('express');
jest.mock('./base/logger');
jest.mock('./setup/setupContext');
jest.mock('./setup/setupControllers');
jest.mock('./setup/setupServer');

import express from 'express';
import config from './base/config';
import setupContext from './setup/setupContext';
import setupControllers from './setup/setupControllers';
import setupServer from './setup/setupServer';

/* Tests */
import { main } from '.';

describe('the package', () => {
	test('the main entry point', () => {
		const app = Symbol('app');
		const context = {
			app, config,
		};

		express.mockReturnValue(app);

		main();

		expect(setupContext).toHaveBeenCalledWith(context);
		expect(setupControllers).toHaveBeenCalledWith(context);
		expect(setupServer).toHaveBeenCalledWith(context);
	});
});
