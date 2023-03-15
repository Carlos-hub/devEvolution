import {Request,Response} from 'express';
import { ShowClientUseCase } from './showClientUseCase';
import { ObjectId } from 'mongoose';
import { decode } from 'jsonwebtoken';

export class ShowClientController{
 async handle(request:Request,response:Response){
  const showClientUseCase = new ShowClientUseCase(); 
  const  {id}: any = request.headers;
  const token = request.headers.authorization?.split(' ')[1];
  console.log('====================================');
  console.log(token);
  console.log('====================================');
  const findId:any = decode(token ?? '',{complete:true})

  console.log(findId)
  try{
   const resposta = await showClientUseCase.execute(findId?.payload.sub)
   return response.status(200).json(resposta)
  }catch(error:any){
   if (error.name === 'CastError') {
    // O _id não é válido
    return response.status(400).json("O _id fornecido é inválido.")
  } else if (error.name === 'NotFoundError') {
    // O _id não foi encontrado
    return response.status(404).json('O _id fornecido não foi encontrado.')
  } else {
    // Erro inesperado
    return response.status(500).json('Ocorreu um erro inesperado.')
  }
  }

 }
}