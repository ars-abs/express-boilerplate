import { env } from 'process';

const {
	NODE_ENV: nodeEnv = 'development',
	// eslint-disable-next-line no-magic-numbers
	PORT = 1235,
} = env;

const config = {
	// #Note: ENV is destructured to save on access costs.
	env: { ...env },
	environment: nodeEnv,
	port: PORT,
};

export default config;
