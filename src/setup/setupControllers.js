import ping from '../controllers/ping';

const setupControllers = ({ app }) => {
	app.get('/ping', ping);
};

export default setupControllers;
