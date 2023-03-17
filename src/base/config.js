import { env } from 'process';

const { NODE_ENV: nodeEnv = 'development' } = env;

const config = {
	// #Note: ENV is destructured to save on access costs.
	env: { ...env },
	environment: nodeEnv,
};

export default config;
