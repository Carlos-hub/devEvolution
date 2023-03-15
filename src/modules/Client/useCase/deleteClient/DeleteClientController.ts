import {Request,Response} from 'express';
import { DeleteClientUseCase } from './DeleteClientUseCase';
import { decode } from 'jsonwebtoken';


export class DeleteClientController{
 async handle(request:Request,response:Response){
  const token = request.headers.authorization?.split(' ')[1];
  const findId:any = decode(token ?? '',{complete:true})
  const deleteClientUseCase = new DeleteClientUseCase();
  try{
   const deleteUser = await deleteClientUseCase.execute(findId.payload.sub);
   response.status(200).json(deleteUser)
  }catch(err){
   response.status(400).json(err)
  }
 }
}