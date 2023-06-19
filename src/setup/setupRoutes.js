import info from '@controllers/info';
import login from '@controllers/login';
import meta from '@controllers/meta';
import ping from '@controllers/ping';

// INFO: If we use express-auth we need to setup login page for auth failure
const setupRoutes = ({ app, config: { auth: { loginURL }}}) => {
	app.get('/ping', ping);
	app.get('/info', info);
	app.get('/meta', meta);
	app.get(loginURL, login);
};

export default setupRoutes;
