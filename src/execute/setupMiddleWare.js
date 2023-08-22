import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

const setupMiddleWare = ({ app, config: { cors: corsOption }}) => {
	corsOption && app.use(cors(corsOption));
	app.use(express.json());
	app.use(cookieParser());
};

export default setupMiddleWare;
