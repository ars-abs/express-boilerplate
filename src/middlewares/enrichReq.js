const enrichReq = (context) => (
	req, res, next
) => {
	req.context = context ;
	next();
};

export default enrichReq;
