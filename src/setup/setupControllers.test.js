import ping from '../controllers/ping';
import setupControllers from './setupControllers';

jest.mock('../controllers/ping');

test('setupControllers', () => {
	const app = { get: jest.fn() };

	setupControllers({ app });

	expect(app.get).toHaveBeenCalledWith('/ping', ping);
});
