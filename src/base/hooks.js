const fn = (req, res) => res.send('example hook');
const hooks = {
	'example-hook': fn,
};

export default hooks;
