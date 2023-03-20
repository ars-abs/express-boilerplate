/* Mocks and Stubs */
jest.mock('express');
jest.mock('./base/logger');
jest.mock('./setup/server');

import express from 'express';
import config from './base/config';
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

		expect(server).toHaveBeenCalledWith(context);
	});
});
