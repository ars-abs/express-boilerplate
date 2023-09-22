import { findIndex } from '@laufire/utils/collection';
import { match } from 'path-to-regexp';

const methods = {
	read: ({ id, method }) => id && method === 'GET',
	list: ({ method }) => method === 'GET',
	create: ({ method }) => method === 'POST',
	update: ({ method }) => method === 'PUT',
	delete: ({ method }) => method === 'DELETE',
};

const setupCatchAll = (context) => {
	const { app, service,
		config: { basePath }, constants: { statusCodes }} = context;
	const parse = match(`${ basePath }/:name/:id?`, { decode: decodeURIComponent });

	app.all(`${ basePath }/*`, async (req, res) => {
		const { name, id } = parse(req.path).params;
		const { method, path, query, body: payload } = req;
		const action = findIndex(methods, (fn) => fn({ id, method }));
		const data = { payload, id };
		const meta = { ...query, path };

		const response = await service({
			...context, ...req.context, name, action, data, meta,
		});
		const defaultStatus = 200;

		res.status(statusCodes[response?.meta?.status] || defaultStatus);
		res.json(response);
	});
};

export default setupCatchAll;
