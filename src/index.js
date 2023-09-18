import 'module-alias/register';
import { pipe } from './helpers';
import build from './build';
import execute from './execute';
import buildContext from './buildContext';

const main = () => pipe([
	build,
	execute,
], buildContext());

main();

// for testing
export {
	main,
};
