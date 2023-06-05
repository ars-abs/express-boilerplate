import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

const setupMiddleWares = ({ app }) => {
	app.use(cors({ origin: '*' }));
	app.use(express.json());
	app.use(cookieParser());
};

export default setupMiddleWares;
