const fn = (req, res) => res.send('example hook');

const authAction = async (req, res) => {
	const { context: { repoCRUD }, params: { id: targetID }} = req;
	const {
		entity, action, payload: data, id,
	} = await repoCRUD.signed.get({ id: targetID });

	const props = {
		get: { id },
		getAll: { req },
		create: { data },
		update: { id, data },
		remove: { id },
	};

	res.send(await repoCRUD[entity][action](props[action]));
};

const hooks = {
	'example-hook': fn,
	'auth-action/:id': authAction,
};

export default hooks;
