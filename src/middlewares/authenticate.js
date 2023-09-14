import jwt from 'jsonwebtoken';

const authenticate = (
	req, res, next
) => {
	try {
		const secretKey = process.env.JWTSECRET;
		const { token } = req.cookies;
		const { exp, ...rest } = jwt.verify(token, secretKey);
		const secondsOffset = 1000;
		const expiresAt = new Date(exp * secondsOffset);

		req.session = { ...rest, expiresAt };
		next();
	}
	catch (error) {
		req.session = {};
		next();
	}
};

export default authenticate;
