import { IProductCreate, IProductUpdate } from '../dto/IProduct';
import conn from '../infra/db/postgresql/connection';

export default class ProductModel {
  async get (id: Number): Promise<any> {
    const result = await conn('products').where({ id }).then((rows) => rows.length > 0 ? rows[0] : {}).catch((_) => []);
    return result;
  }

  async getAll (nameLike:string, limit:number, offset:number): Promise<any> {
    let where = '1 = 1';

    if (nameLike || nameLike.length > 0) {
      where = `name LIKE '%${nameLike}%'`;
    }

    const result = await conn('products')
      .whereRaw(where)
      .limit(limit)
      .offset(offset)
      .orderBy('name')
      .then().catch((_) => {});
    return result;
  }

  async create (product: IProductCreate): Promise<boolean> {
    const result = await conn('products').insert(product).then(res => Object(res).rowCount > 0).catch(_ => false);
    return result;
  }

  async update (id: Number, dataToUpdate: IProductUpdate): Promise<boolean> {
    const result = await conn('products').update(dataToUpdate).where({ id }).then((res) => res > 0).catch((e) => { console.log(e); return false; });
    return result;
  }

  async delete (id: Number): Promise<boolean> {
    const result = await conn('products').delete().where({ id }).then((res) => res > 0).catch((e) => { console.log(e); return false; });
    return result;
  }
}
