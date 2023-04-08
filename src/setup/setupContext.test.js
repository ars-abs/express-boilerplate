import setupContext from './setupContext';

test('setupContext', () => {
	const app = { use: jest.fn() };
	const rest = {};
	const context = { app, ...rest };

	setupContext(context);

	expect(app.use).toHaveBeenCalledWith(expect.any(Function));
});
