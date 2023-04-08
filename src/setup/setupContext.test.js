jest.mock('../middlewares/setContext');
import setContext from '../middlewares/setContext';

import setupContext from './setupContext';

test('setupContext', () => {
	const app = { use: jest.fn() };
	const rest = {};
	const context = { app, ...rest };
	const middlewareFn = Symbol('setContext');

	setContext.mockReturnValue(middlewareFn);

	setupContext(context);

	expect(setContext).toHaveBeenCalledWith(rest);
	expect(app.use).toHaveBeenCalledWith(middlewareFn);
});
