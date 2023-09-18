import { map } from '@laufire/utils/collection';

const executeMiddleware = ({ app, middlewares }) => {
	map(middlewares, (middleware) =>
		map(middleware, (fn) => app.use(fn)));
};

export default executeMiddleware;
