import { map } from '@laufire/utils/collection';
import enrichReq from '../middlewares/enrichReq';
import { wrapAsArray } from '../helpers';

const methods = {
	'*': 'all',
	'GET': 'get',
	'POST': 'post',
	'PUT': 'put',
	'DELETE': 'delete',
};

const setupRoute = ({ app, type, path, functions }) => {
	const res = app[methods[type]](path, ...functions);

	return res;
};

const execPlugin = (context) => {
	const { app, routes = {}} = context;

	app.use(enrichReq(context));
	map(routes, (fns, route) => {
		const functions = wrapAsArray(fns);
		const [type, path] = route.split(' ');

		setupRoute({ app, type, path, functions });
	});
};

export default execPlugin;
