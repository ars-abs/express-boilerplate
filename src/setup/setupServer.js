import logger from '../base/logger';

const setupServer = ({ app, config: { env: { port, environment }}}) => {
	app.listen(port, () => {
		logger.info(`Starting in ${ environment } environment at port ${ port }.`);
	});
};

export default setupServer;
