import { map } from '@laufire/utils/collection';

const executeMiddleware = ({ app, middlewares, config: { plugins }}) => {
	map(plugins, (plugin, name) => app.use(middlewares[name]));
};

export default executeMiddleware;
