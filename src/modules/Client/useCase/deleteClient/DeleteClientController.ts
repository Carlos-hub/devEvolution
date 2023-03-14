import {Request,Response} from 'express';
import { DeleteClientUseCase } from './DeleteClientUseCase';


export class DeleteClientController{
 async handle(request:Request,response:Response){
  const { id } = request.params;
  const deleteClientUseCase = new DeleteClientUseCase();
  try{
   const deleteUser = await deleteClientUseCase.execute(id);
   response.status(200).json(deleteUser)
  }catch(err){
   response.status(400).json(err)
  }
 }
}