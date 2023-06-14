import home from '../controllers/home';

const setupProtectedRoutes = ({ app }) => {
	app.get('/', home);
};

export default setupProtectedRoutes;
