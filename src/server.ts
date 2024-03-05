import 'reflect-metadata';
import http, { Server } from 'http';
import https from 'https';
import app from './appBootstrapped';
import port from './port';
import certs from './utils/certs';
import { PRODUCTION } from './envNames';

const httpServer: Server =
  process.env.NODE_ENV === PRODUCTION
    ? https.createServer(certs, app)
    : http.createServer(app);

httpServer.listen(port, () => {
  console.log("Server has started");
});

export default httpServer;
