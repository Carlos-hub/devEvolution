import { Product } from "../../Model/ProductModel";

interface IProductCreate {
 name: string;
 created_at: Date;
 price: number;
 status: string;
 description: string;
};

export class CreateProductUseCase {
 async execute({
   name,
   created_at,
   price,
   status,
   description,
 }: IProductCreate) {

   const newProduct = await Product.create({
     name,
     created_at,
     price,
     status,
     description,
   });
   return newProduct;
 }
}
