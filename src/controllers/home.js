const home = (req, res) => {
	res.json({ user: req.user, message: 'Home page' });
};

export default home;
