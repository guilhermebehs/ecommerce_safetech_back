
export interface IProductGet{
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl:string;
    createdAt: Date;

 };

export interface IProductCreate{
    name: string;
    description: string;
    price: number;
    imageUrl?:string;
 };

export interface IProductUpdate{
    name?: string;
    description?: string;
    price?: string;
    imageUrl:string;
 }
