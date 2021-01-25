import { IProductUpdate } from './../dto/IProduct';
import { IProductGet, IProductCreate } from '../dto/IProduct';
import IProductController from '../contacts/IProductController';
import ProductModel from '../models/ProductModel';

export default class ProductController implements IProductController {
  private productModel: ProductModel;

  constructor () {
    this.productModel = new ProductModel();
  }

  async get (id: Number): Promise<IProductGet> {
    const product = await this.productModel.get(id) as IProductGet;
    return product;
  }

  async getAll (): Promise<Array<IProductGet>> {
    const products = await this.productModel.getAll({}) as Array<IProductGet>;
    return products;
  }

  async create (product: IProductCreate): Promise<boolean> {
    const sucess = await this.productModel.create(product);
    return sucess;
  }

  async update (id: Number, dataToUpdate: IProductUpdate): Promise<boolean> {
    const result = await this.productModel.update(id, dataToUpdate);
    return result;
  }

  async delete (id: Number): Promise<boolean> {
    const result = await this.productModel.delete(id);
    return result;
  }
}