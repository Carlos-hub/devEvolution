import { Request,Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController{
 async handle(request:Request,response:Response){
  const createClientUseCase = new CreateClientUseCase();
  const {
   name,
   age,
   adress,
   cpf,
   paymentMethod,
   email,
   password,
   bornDate,
   orderHistory,
   avatar,
  } = request.body
  try{
   const createClient = await createClientUseCase.execute({
    name,
    age,
    cpf,
    adress,
    paymentMethod,
    email,
    password,
    bornDate,
    orderHistory,
    avatar,
   });
   return response.status(201).json(createClient);
  } catch(err:any | Error){
   console.log("#################")
   console.log(err)
 
   return response.status(400).json("message: Email inválido")
  }
  }
}