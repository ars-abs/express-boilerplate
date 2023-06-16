import info from '../controllers/info';
import ping from '../controllers/ping';
import setupRoutes from './setupRoutes';

jest.mock('../controllers/ping');
jest.mock('../controllers/info');
jest.mock('../controllers/ping');

test('setupRoutes', () => {
	const app = { get: jest.fn() };

	setupRoutes({ app });

	expect(app.get).toHaveBeenCalledWith('/ping', ping);
	expect(app.get).toHaveBeenCalledWith('/info', info);
});
