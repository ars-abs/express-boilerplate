import 'module-alias/register';
import { pipe } from './helpers';
import build from './setup/build';
import execute from './setup/execute';
import buildContext from './setup/buildContext';

const main = () => pipe([
	build,
	execute,
], buildContext());

main();

// for testing
export {
	main,
};
