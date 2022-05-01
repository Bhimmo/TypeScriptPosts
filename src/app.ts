import express from 'express';
export const app = express();
import routers from './routes';

app.use(express.json())

app.use(routers)