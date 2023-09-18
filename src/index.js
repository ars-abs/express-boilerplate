import 'module-alias/register';
import { pipe } from './helpers';
import build from './build';
import execute from './execute';
import buildContext from './buildContext';
import setupCatchAll from './setupCatchAll';

const main = () => pipe([
	build,
	execute,
	setupCatchAll,
], buildContext());

main();

// for testing
export {
	main,
};
