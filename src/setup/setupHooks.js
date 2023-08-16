import customHooks from '@base/hooks';
import { map } from '@laufire/utils/collection';
import enrichReq from '@middlewares/enrichReq';

const setupHooks = (context) => {
	const { app, hooks = {}} = context;

	app.use(enrichReq(context));

	return map({ ...customHooks, ...hooks }, (fn, path) => app.get(`/${ path }`, fn));
};

export default setupHooks;
