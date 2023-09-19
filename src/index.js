import 'module-alias/register';
import { pipe } from './helpers';
import build from './build';
import execute from './execute';
import enrichContext from './buildContext';

const main = (context) => pipe([
	enrichContext,
	build,
	execute,
], context);

main();
// for testing
export {
	main,
};
