import { Product } from "../../Model/ProductModel";

export class ShowAllProductUseCase {
 async execute(): Promise<any> {
   const products = await Product.find({});
   return products;
 }
}