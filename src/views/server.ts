import Express from 'express';
import bodyParser from 'body-parser';
import ProductRoutes from './ProductRoutes';
import { AbstractRoutes } from './AbstractRoutes';
import cors from 'cors';

export default function createServer () {
  const productRoutes: AbstractRoutes = new ProductRoutes();
  const server = Express();
  server.use(cors());
  server.use(bodyParser.json());
  server.use(productRoutes.createRoutes());
  return server;
}
