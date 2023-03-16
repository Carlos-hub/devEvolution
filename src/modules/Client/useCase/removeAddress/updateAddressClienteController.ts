import { Request,Response } from "express";
import { decode } from "jsonwebtoken";
import { UpdateAddressClientUseCase } from "./UpdateAddressClientUseCase";

export class UpdateAddressController{
 async handle(request:Request,response:Response){
  const updateAddres = new UpdateAddressClientUseCase();
  const token = request.headers.authorization?.split(' ')[1];
  const findId:any = decode(token ?? '',{complete:true})
  try{

   const update = updateAddres.execute(findId.payload.sub,request.body)
   return response.status(201).json(update)
  }catch(err){
   return response.status(401).json(err)
  }

 //  try {
 //   const result = await Client.updateOne(
 //     { _id: userId },
 //     { $pull: { address: { _id: idRemove } } }
 //   ).exec();
 //   console.log(result);
 //   return result;
 // } catch (err) {
 //   console.log(err);
 //   return err;
 // }

 }
}