import { IProductUpdate } from './../dto/IProduct';
import { IProductCreate, IProductGet } from '../dto/IProduct';

interface IProductController{
    get(id:Number): Promise<IProductGet>;
    getAll(limit:number, offset:number): Promise<Array<IProductGet>>;
    create(user: IProductCreate): Promise<boolean>;
    update(id: Number, dataToUpdate: IProductUpdate): Promise<boolean>;
    delete(id:Number): Promise<boolean>;
}

export default IProductController;
