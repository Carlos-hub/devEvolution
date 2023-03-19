import {Request,Response} from 'express';
import { DeleteUserUseCase } from './DeleteUserUseCase';
import { decode } from 'jsonwebtoken';


export class DeleteUserController{
 async handle(request:Request,response:Response){
  const token = request.headers.authorization?.split(' ')[1];
  const findId:any = decode(token ?? '',{complete:true})
  const deleteUserUseCase = new DeleteUserUseCase();
  try{
   const deleteUser = await deleteUserUseCase.execute(findId.payload.sub);
   response.status(200).json(deleteUser)
  }catch(err){
   response.status(400).json(err)
  }
 }
}