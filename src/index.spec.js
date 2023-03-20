/* Mocks and Stubs */
jest.mock('express');
jest.mock('./base/logger');
jest.mock('./setup/setupControllers');
jest.mock('./setup/server');

import express from 'express';
import config from './base/config';
import setupControllers from './setup/setupControllers';
import server from './setup/server';

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
		expect(server).toHaveBeenCalledWith(context);
	});
});
