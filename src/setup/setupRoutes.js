import info from '../controllers/info';
import login from '../controllers/login';
import meta from '../controllers/meta';
import ping from '../controllers/ping';

const setupRoutes = ({ app }) => {
	app.get('/ping', ping);
	app.get('/info', info);
	app.get('/login', login);
	app.get('/meta', meta);
};

export default setupRoutes;
