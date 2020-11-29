import * as dotenv from 'dotenv';
const pathToEnvFile = __dirname + '/../../.env';
dotenv.config({ path: pathToEnvFile });

import * as express from 'express';
import { Application } from 'express';
import { Server } from './Server';

const app: Application = express();
const server: Server = new Server(app);
const port: number = parseInt(process.env.port, 10) || 3000;

app.listen(port, 'localhost', () => {
    console.info(`Server running on : http://localhost:${port}`);
});