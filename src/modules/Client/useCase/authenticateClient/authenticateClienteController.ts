import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./authenticateClienteUseCase";


export class AuthenticateClientController{
 async handle(request:Request,response:Response){
  const authenticateCLientUSeCase = new AuthenticateClientUseCase(); 
  const {email,senha} = request.body;
  try{
   // console.log(email,senha,"no controller")
   const token = await authenticateCLientUSeCase.execute(email,senha);
  return response.status(200).json(token)
  }catch(err:any){
   console.log(err)
   return response.status(400).json(err.message)
  }

 }
}