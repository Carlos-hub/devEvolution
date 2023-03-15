import { Product } from "../../Model/ProductModel";

export class CreateManyProductsUseCase{
 async execute(){
  const pizzas = [
   {
     name: "Margherita",
     price: 25.00,
     status: "available",
     description: "Molho de tomate, mussarela, manjericão"
   },
   {
     name: "Pepperoni",
     price: 30.00,
     status: "available",
     description: "Molho de tomate, mussarela, pepperoni"
   },
   {
     name: "Frango com Catupiry",
     price: 35.00,
     status: "unavailable",
     description: "Molho de tomate, mussarela, frango, catupiry"
   },
   {
     name: "Calabresa",
     price: 28.00,
     status: "available",
     description: "Molho de tomate, mussarela, calabresa, cebola"
   },
   {
     name: "Quatro Queijos",
     price: 32.00,
     status: "available",
     description: "Molho de tomate, mussarela, queijo prato, parmesão, gorgonzola"
   },
   {
     name: "Portuguesa",
     price: 35.00,
     status: "available",
     description: "Molho de tomate, mussarela, presunto, cebola, ovo, azeitona"
   },
   {
     name: "Atum",
     price: 30.00,
     status: "available",
     description: "Molho de tomate, mussarela, atum, cebola, azeitona"
   },
   {
     name: "Bacon",
     price: 32.00,
     status: "available",
     description: "Molho de tomate, mussarela, bacon, cebola, azeitona"
   }
 ];
 try{
  const productAdd = await Product.insertMany(pizzas)
  return productAdd;
 }catch(err){
  return err
 }

 }
}