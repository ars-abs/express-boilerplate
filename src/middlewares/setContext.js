const setContext = (context) => (
	req, res, next
) => {
	req.context = { ...context };
	next();
};

export default setContext;
