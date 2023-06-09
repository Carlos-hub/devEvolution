import { Request, Response } from "express";
import { decode } from "jsonwebtoken";
import { DeleteClientAddressUseCase } from "./deleteClientAddressUseCase";

export class DeleteClientAddressController{
 async handle(request:Request,response:Response){
  const deleteAddress = new DeleteClientAddressUseCase()
  const token = request.headers.authorization?.split(' ')[1];
  const findId:any = decode(token ?? '',{complete:true})
  const {id} = request.params;
  // console.log(idParam,findId);
  try{
   const address = await deleteAddress.execute(findId.payload.sub,id);
   return response.status(200).json(address);
  }catch(err){
   return response.status(400).json(err);
  }


 }
}