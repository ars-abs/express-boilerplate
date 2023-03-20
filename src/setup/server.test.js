jest.mock('../base/logger');

import config from '../base/config';
import logger from '../base/logger';
import server from './server';

test('setup server', () => {
	const app = { listen: jest.fn().mockImplementation((port, fn) => fn()) };
	const context = { app, config };

	server(context);

	expect(app.listen).toHaveBeenCalled();
	expect(logger.info).toHaveBeenCalledWith(expect.any(String));
});
