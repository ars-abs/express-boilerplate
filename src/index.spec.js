/* Mocks and Stubs */
jest.mock('./base/logger');
import logger from './base/logger';

/* Tests */
import { main } from '.';

describe('the package', () => {
	test('the main entry point', () => {
		main();

		expect(logger.info).toHaveBeenCalledWith(expect.any(String));
	});
});
