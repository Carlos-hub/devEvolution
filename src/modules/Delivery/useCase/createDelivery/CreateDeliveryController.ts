import { Request,Response } from "express";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";
import { decode } from "jsonwebtoken";

export class CreateDeliveryController{
 async handle(request:Request,response:Response){
  const {
   product,
   deliveryAddress
  } = request.body;
  const createDeliveryUseCase = new CreateDeliveryUseCase();
  const token = request.headers.authorization?.split(' ')[1];
  const findId:any = await decode(token ?? '',{complete:true})
  try{
   const createDelivery = await createDeliveryUseCase.execute(
    findId.payload.sub,
    product,
    deliveryAddress)
   return response.status(201).json(createDelivery)
  }catch(err){
   console.log(err);
   return response.status(400).json(err);
  }
 }
}