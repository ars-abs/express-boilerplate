import info from '../controllers/info';
import ping from '../controllers/ping';
import setupControllers from './setupControllers';

jest.mock('../controllers/ping');
jest.mock('../controllers/info');
jest.mock('../controllers/ping');

test('setupControllers', () => {
	const app = { get: jest.fn() };

	setupControllers({ app });

	expect(app.get).toHaveBeenCalledWith('/ping', ping);
	expect(app.get).toHaveBeenCalledWith('/info', info);
});
