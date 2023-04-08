jest.mock('../base/logger');

import config from '../base/config';
import logger from '../base/logger';
import setupServer from './setupServer';

test('setup server', () => {
	const app = { listen: jest.fn().mockImplementation((port, fn) => fn()) };
	const context = { app, config };

	setupServer(context);

	expect(app.listen).toHaveBeenCalledWith(config.port, expect.any(Function));
	expect(logger.info).toHaveBeenCalledWith(expect.any(String));
});
