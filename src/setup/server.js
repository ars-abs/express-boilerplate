import logger from '../base/logger';

const server = ({ app, config: { port, environment }}) => {
	app.listen(port, () => {
		logger.info(`Starting in ${ environment } environment at port ${ port }.`);
	});
};

export default server;
