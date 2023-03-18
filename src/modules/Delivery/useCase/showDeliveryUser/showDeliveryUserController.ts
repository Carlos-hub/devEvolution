import { Request,Response } from "express";
import { ShowDeliveryUserUseCase } from "./showDeliveryUserUseCase";
import { decode } from "jsonwebtoken";


export class ShowDeliveryUserController{
 async handle(request:Request,response:Response){
  const token = request.headers.authorization?.split(' ')[1];
  const findId:any = await decode(token ?? '',{complete:true})
  const showDeliveryUseCase = new ShowDeliveryUserUseCase();
 try{
  const showDelivery = await showDeliveryUseCase.execute(findId.payload.sub)
  return response.status(200).json(showDelivery);
 }catch(err){
  return response.status(400).json(err)
 }
 }
}