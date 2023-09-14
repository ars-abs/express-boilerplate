import 'module-alias/register';
import { pipe } from './helpers';
import build from './build';
import execute from './execute';
import buildContext from './buildContext';
import routes from './routes';

const main = () => pipe([
	build,
	execute,
	routes,
], buildContext());

main();

// for testing
export {
	main,
};
