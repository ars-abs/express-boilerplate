import { pipe } from '../../helpers';
import executeMiddleware from './executeMiddleware';
import executeRoutes from './executeRoutes';

const executePlugin = (context) => pipe([
	executeMiddleware,
	executeRoutes,
], context);

export default executePlugin;
