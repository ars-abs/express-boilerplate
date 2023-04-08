import setContext from './setContext';

test('setContext', () => {
	const context = Symbol('context');

	expect(setContext(context)).toEqual(expect.any(Function));
});
