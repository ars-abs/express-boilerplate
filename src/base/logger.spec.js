/* Mocks & Stubs */
const mockConfigModule = {};
const mockPino = jest.fn();

jest.mock('./config', () => mockConfigModule);
jest.mock('pino', () => mockPino);
jest.unmock('./logger');

/* Tests */
describe('the logger', () => {
	test('When the environment is production the logger'
		+ ' doesn\'t prettyPrint.', () => {
		mockConfigModule.environment = 'production';

		require('./logger');

		expect(mockPino).toBeCalledWith({
			prettyPrint: false,
		});
	});

	test('When the environment is not production the logger'
		+ ' does prettyPrint.', () => {
		mockConfigModule.environment = 'development';

		require('./logger');

		expect(mockPino).toBeCalledWith({
			prettyPrint: {
				colorize: true,
			},
		});
	});
});
