import info from '@controllers/info';
import login from '@controllers/login';
import meta from '@controllers/meta';
import ping from '@controllers/ping';
import home from '@controllers/home';

// INFO: If we use express-auth we need to setup login page for auth failure
const setupRoutes = ({ app, protect, config: { auth: { loginURL }}}) => {
	app.get('/ping', ping);
	app.get('/info', info);
	app.get('/meta', meta);
	app.get(loginURL, login);
	app.get(
		'/', protect, home
	);
};

export default setupRoutes;
