const setupContext = ({ app, ...rest }) =>
	app.use((
		req, res, next
	) => {
		req.context = { ...rest };
		next();
	});

export default setupContext;
