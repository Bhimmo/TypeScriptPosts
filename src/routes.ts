import { Router } from 'express';
import posts from './routes/posts';

const rotas = Router();

rotas.use('', posts);

export default rotas