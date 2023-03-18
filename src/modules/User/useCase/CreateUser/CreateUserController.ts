import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";


export class CreateUserController{
  async handle(request:Request,response:Response){
   const createUser = new CreateUserUseCase();
   const {name,
   age,
   cpf,
   email,
   password,
   phone} = request.body;

   try{
    const created = await  createUser.execute(
     name,
     age,
     cpf,
     email,
     password,
     phone
    )
    return response.status(201).json(created)
   }catch(err){
    return response.status(400).json(err)
   }
   
  }
}