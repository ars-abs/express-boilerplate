import hooks from '@base/hooks';
import { map } from '@laufire/utils/collection';
import enrichReq from '@middlewares/enrichReq';

const setupHooks = (context) => {
	const { app } = context;

	app.use(enrichReq(context));

	return map(hooks, (fn, path) => app.get(`/${ path }`, fn));
};

export default setupHooks;
