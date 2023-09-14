import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import enrichReq from '../middlewares/enrichReq';
import authenticate from '../middlewares/authenticate';

const setupMiddleWare = (context) => {
	const { app, config: { cors: corsOption }} = context;

	corsOption && app.use(cors(corsOption));
	app.use(express.json());
	app.use(cookieParser());
	app.use(enrichReq(context));
	app.use(authenticate);
};

export default setupMiddleWare;
