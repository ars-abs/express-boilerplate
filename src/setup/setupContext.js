import setContext from '../middlewares/setContext';

const setupContext = ({ app, ...rest }) =>
	app.use(setContext(rest));

export default setupContext;
