/* Mocks and Stubs */
jest.mock('express');
jest.mock('./base/logger');
jest.mock('./setup/setupControllers');
jest.mock('./setup/setupServer');

import express from 'express';
import config from './base/config';
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

		expect(setupControllers).toHaveBeenCalledWith(context);
		expect(setupServer).toHaveBeenCalledWith(context);
	});
});
