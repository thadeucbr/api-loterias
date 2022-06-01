import { Router } from 'express';
import gamesRoutes from './games.routes';

const routes = Router();

routes.get('/game', gamesRoutes)

export default routes;