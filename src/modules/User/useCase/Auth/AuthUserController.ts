import { Request, Response } from "express";
import { AuthUserUseCase } from "./AuthUserUseCase";


export class AuthUserController{
  async handle(request:Request,response:Response){
   const authUserUseCase = new AuthUserUseCase();
   const {email,senha} = request.body;
try{
  const authUser = await authUserUseCase.execute(email,senha);
  return response.status(200).json(authUser);
}catch(err){
 return response.status(400).json(err);
}




  }
}