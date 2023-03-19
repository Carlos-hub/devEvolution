import { Request,Response } from "express";
import { EditUserUseCase } from "./EditUserUseCase";
import { decode } from "jsonwebtoken";
import { hash } from "bcrypt";

export class EditUserController{
 async handle(request:Request,response:Response){
  const token = request.headers.authorization?.split(' ')[1];
  const findId:any = decode(token ?? '',{complete:true})
  const editUserUseCase= new EditUserUseCase();
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
   try{
   const edit = await editUserUseCase.execute(findId?.payload.sub,editUser);
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