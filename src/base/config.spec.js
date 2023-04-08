/* Mocks & Stubs */
const mockEnv = {
	environment: 'development',
	port: 3000,
};
const mockProcessModule = {
	env: mockEnv,
};

jest.mock('process', () => mockProcessModule);

/* Tests */
describe('the config', () => {
	test('The env-var NODE_ENV is mapped to config.env.', () => {
		mockEnv.NODE_ENV = 'production';
		const config = require('./config').default;

		expect(config.env.environment).toEqual('production');
		delete mockEnv.NODE_ENV;
	});

	test('When NODE_ENV is not present config.env.environment is development.',
		() => {
			delete mockEnv.NODE_ENV;

			const config = require('./config').default;

			expect(config.env.environment).toEqual('development');
		});

	test('Environment variables are available as config.env.', () => {
		mockEnv.someVar = Symbol('someVar');

		const config = require('./config').default;

		expect(config.env).toEqual(mockEnv);
	});
});
