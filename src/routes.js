import { findIndex } from '@laufire/utils/collection';
import { match } from 'path-to-regexp';

const methods = {
	list: ({ method }) => method === 'GET',
	create: ({ method }) => method === 'POST',
	read: ({ id, method }) => id && method === 'GET',
	update: ({ method }) => method === 'PUT',
	delete: ({ method }) => method === 'DELETE',
};

const statusCodes = {
	notFound: 404,
	invalidInput: 400,
	success: 200,
	created: 201,
	deleted: 204,
	unauthorized: 401,
};
const routes = (context) => {
	const { app, service, config: { baseURL }} = context;
	const parse = match(`${ baseURL }/:name/:id?`, { decode: decodeURIComponent });

	app.all('/*', async (req, res) => {
		const { name, id } = parse(req.path).params;
		const { method, path, query, body: payload } = req;
		const action = findIndex(methods, (fn) => fn({ id, method }));
		const data = { payload, id };
		const meta = { ...query, path };
		const response = await service({
			...context, name, action, data, meta,
		});

		res.status(statusCodes[response.meta.status]);
		res.json(response);
	});
};

export default routes;

// const getSession = (req, res) => {
// 	const unauthorized = () => {
// 		const statusCode = 401;

// 		res.status(statusCode).json({ statusCode });
// 	};

// 	equals(req.session, {})
// 		? unauthorized()
// 		: res.status(200).json(req.session);
// };

// const temp = {
// 	session: getSession,
// };
