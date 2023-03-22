import { Request, Response } from "express";
import { UpdateDeliveryUSeCase } from "./updateDeliveryUseCase";


export class UpdateDeliveryController{
 async handle(request:Request,response:Response){
   const {id} = request.params
   const {status} = request.body;
   const updateDelivery = new UpdateDeliveryUSeCase();
   try{
    // console.log(id,status);
    const updated = await updateDelivery.execute(id,status);

   return response.status(200).json("ok");
   }catch(err){
    return response.status(400).json(err)
   }
 }
}