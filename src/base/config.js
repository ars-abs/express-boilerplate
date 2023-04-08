import { env } from 'process';
import dotenv from 'dotenv';

dotenv.config();

const {
	NODE_ENV: nodeEnv = 'development',
	// eslint-disable-next-line no-magic-numbers
	PORT = 3000,
	...rest
} = env;

const config = {
	env: {
		...rest,
		environment: nodeEnv,
		port: PORT,
	},

	// configurations here...

};

export default config;
