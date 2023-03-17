import pino from 'pino';
import config from './config';

/* State */
const { environment } = config;

/* Data */
const defaultPrettyPrintConfig = { colorize: true };
const prettyPrintConfigs = {
	production: false,
};

const logger = pino({
	prettyPrint: prettyPrintConfigs.hasOwnProperty(environment)
		? prettyPrintConfigs[environment]
		: defaultPrettyPrintConfig,
});

export default logger;
