import { map } from '@laufire/utils/collection';
import { wrapAsArray } from '../../helpers';

const methods = {
	'*': 'all',
	'GET': 'get',
	'POST': 'post',
	'PUT': 'put',
	'DELETE': 'delete',
};

const setupRoute = ({ app, type, path, functions }) =>
	app[methods[type]](path, ...functions);

const executeRoutes = ({ app, routes = {}}) => {
	map(routes, (fns, route) => {
		const functions = wrapAsArray(fns);
		const [type, path] = route.split(' ');

		setupRoute({ app, type, path, functions });
	});
};

export default executeRoutes;
