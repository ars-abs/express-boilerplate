import express from 'express';
import packageInfo from '../../package.json';
import config from '@base/config';
import service from './service';
import constants from '@base/constants';
import { merge } from '@laufire/utils/collection';

const enrichContext = (context) => {
	const app = express();
	const info = {
		name: packageInfo.name,
		description: packageInfo.description,
		version: packageInfo.version,
		lastStartTime: new Date(),
	};
	const defaultContext = { app, config, constants, info, service } ;

	return merge(
		{}, defaultContext, context
	);
};

export default enrichContext;
