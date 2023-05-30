import root from '../controllers/root';

const setupProtectedRoutes = ({ app }) => {
	app.get('/', root);
};

export default setupProtectedRoutes;
