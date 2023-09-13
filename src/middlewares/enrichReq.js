const enrichReq = (context) => (
	req, res, next
) => {
	// TODO: Merge req.context with context
	req.context = context ;
	next();
};

export default enrichReq;
