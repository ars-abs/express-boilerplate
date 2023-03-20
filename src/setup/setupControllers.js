import info from '../controllers/info';
import ping from '../controllers/ping';

const setupControllers = ({ app }) => {
	app.get('/ping', ping);
	app.get('/info', info);
};

export default setupControllers;
