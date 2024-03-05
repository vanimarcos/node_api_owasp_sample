import 'dotenv/config';
import express from 'express';

import cors from 'cors';
import { corsOptions } from './cors';
import routes from './routes';
import app from './app';

/** Bootstrap application */
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

/** Added CORS */
app.use(cors(corsOptions));

app.use(routes);
export default app;
