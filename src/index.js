import 'module-alias/register';
import { pipe } from './helpers';
import build from './build';
import execute from './execute';
import enrichContext from './enrichContext';

const main = (context) => pipe([
	enrichContext,
	build,
	execute,
], context);

export default main;
