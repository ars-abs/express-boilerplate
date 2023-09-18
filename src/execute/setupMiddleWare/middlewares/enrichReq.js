import { merge } from '@laufire/utils/collection';

const enrichReq = (context) => (
	req, res, next
) => {
	req.context = merge(
		{}, context, req.context
	);
	next();
};

export default enrichReq;
