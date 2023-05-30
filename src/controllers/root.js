const root = (req, res) => {
	res.json({ user: req.user });
};

export default root;
