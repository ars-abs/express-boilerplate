import config from '../base/config';

// eslint-disable-next-line no-unused-vars
const { env, auth, ...rest } = config;

const meta = (req, res) => res.json(rest);

export default meta;
