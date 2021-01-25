import { IProductCreate, IProductUpdate } from './../dto/IProduct';
import { Request, Response } from 'express';
import ProductController from '../controllers/ProductController';
import { AbstractRoutes } from './AbstractRoutes';

export default class ProductRoutes extends AbstractRoutes {
    private productController: ProductController;

    constructor () {
      super();
      this.productController = new ProductController();
    }

    createGetResourceRoute () {
      this.routes.get('/products/:id', async (req:Request, res:Response) => {
        const id = Number(req.params.id);
        const product = await this.productController.get(id);
        return res.json(product);
      });
    }

    createGetAllResourcesRoute () {
      this.routes.get('/products', async (req:Request, res:Response) => {
        const products = await this.productController.getAll();
        return res.json(products);
      });
    }

    createSaveResourceRoute () {
      this.routes.post('/products', async (req:Request, res:Response) => {
        const product = req.body as IProductCreate;
        const count = await this.productController.create(product);
        return res.json(count);
      });
    }

    createUpdateResourceRoute () {
      this.routes.put('/products/:id', async (req:Request, res:Response) => {
        const dataToUpdate = req.body as IProductUpdate;
        const id = Number(req.params.id);
        const count = await this.productController.update(id, dataToUpdate);
        return res.json(count);
      });
    }

    createDeleteResourceRoute () {
      this.routes.delete('/products/:id', async (req:Request, res:Response) => {
        const id = Number(req.params.id);
        const count = await this.productController.delete(id);
        return res.json(count);
      });
    }

    createSignInRoute () {
    }

    createSignUpRoute () {
    }
}
