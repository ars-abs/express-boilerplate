import 'module-alias/register';
import { pipe } from './helpers';
import build from './build';
import execute from './execute';
import enrichContext from './enrichContext';
import extendResources from './extendResources';

const main = (context) => pipe([
	enrichContext,
	extendResources,
	build,
	execute,
], context);

main();
// for testing
export {
	main,
};
