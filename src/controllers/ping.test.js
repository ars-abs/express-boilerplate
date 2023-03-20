import ping from './ping';

test('ping', () => {
	const req = Symbol('');
	const res = { send: jest.fn() };

	ping(req, res);

	expect(res.send).toHaveBeenCalledWith('pong');
});
