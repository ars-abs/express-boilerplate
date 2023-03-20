import info from './info';
import packageInfo from '../../package.json';

test('info endpoint', () => {
	const req = Symbol('');
	const res = { json: jest.fn() };

	const data = {
		description: packageInfo.description,
		name: packageInfo.name,
		version: packageInfo.version,
	};

	info(req, res);

	expect(res.json).toHaveBeenCalledWith(data);
});
