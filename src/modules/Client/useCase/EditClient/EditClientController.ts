import { Request,Response } from "express";
import { EditClientUseCase } from "./EditClientUseCase";
import { decode } from "jsonwebtoken";
import { hash } from "bcrypt";

export class EditClientController{
 async handle(request:Request,response:Response){
  const token = request.headers.authorization?.split(' ')[1];
  const findId:any = decode(token ?? '',{complete:true})
  const editCLientUseCase= new EditClientUseCase();
  const hashPassword = await hash(request.body.password,10);
  const editUser={
    name:request.body.name,
    age:request.body.age,
    email:request.body.email,
    password:hashPassword,
    bornDate: request.body.bornDate,
    orderHistory: request.body.orderHistory,
    avatar: request.body.avatar
  }
  console.log(findId?.payload.sub)
   try{
   const edit = await editCLientUseCase.execute(findId?.payload.sub,editUser);
   return response.status(200).json(edit)
   }catch(error:any){
    console.log(error)
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