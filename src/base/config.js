import { env } from 'process';
import dotenv from 'dotenv';
dotenv.config();

const {
	NODE_ENV: nodeEnv = 'development',
	// eslint-disable-next-line no-magic-numbers
	PORT = 1235,
	...rest
} = env;

const config = {
	// #Note: ENV is destructured to save on access costs.
	env: rest,
	environment: nodeEnv,
	port: PORT,
};

export default config;
