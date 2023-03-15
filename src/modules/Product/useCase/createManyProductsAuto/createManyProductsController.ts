import { Request,Response } from "express";
import { CreateManyProductsUseCase } from "./createManyProductsUseCase";

export class CreateManyProductsController{
 async handle(request:Request,response:Response){
  const createManyProductsUseCase = new CreateManyProductsUseCase();
  try{
   const created = await createManyProductsUseCase.execute();
   return response.status(201).json(created);
  }catch(err){
    response.status(400).json(err)
   }
  
 }
}