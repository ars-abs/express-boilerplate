import { map } from '@laufire/utils/collection';
import enrichReq from './middlewares/enrichReq';

const methods = {
	'*': 'all',
	'GET': 'get',
	'POST': 'post',
	'PUT': 'put',
	'DELETE': 'delete',
};

const setupRoute = ({ app, type, path, functions }) =>
	app[methods[type]](path, ...functions);

const execPlugin = (context) => {
	const { app, routes = [] } = context;

	app.use(enrichReq(context));
	map(routes, (functions, route) => {
		const [type, path] = route.split(' ');

		setupRoute({ app, type, path, functions });
	});
};

export default execPlugin;
