import info from '../controllers/info';
import login from '../controllers/login';
import ping from '../controllers/ping';

const setupRoutes = ({ app }) => {
	app.get('/ping', ping);
	app.get('/info', info);
	app.get('/login', login);
};

export default setupRoutes;
