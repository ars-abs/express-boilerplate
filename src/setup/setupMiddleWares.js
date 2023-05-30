import cookieParser from 'cookie-parser';
import cors from 'cors';

const setupMiddleWares = ({ app }) => {
	app.use(cors({ origin: '*' }));
	app.use(cookieParser());
};

export default setupMiddleWares;
