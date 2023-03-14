import { sign } from "jsonwebtoken";
import { Client } from "../../Model/ClientModel";
import { compare } from "bcrypt";
export class AuthenticateClientUseCase{
  async execute(email:string,senha:any){
   const exist = await Client.findOne({email})
   console.log(exist)

   if(!exist){
    console.log("caiu aqui")
     throw new Error("Erro Usuário não encontrado")
   }
   const clientOk = await compare(senha, exist?.password ?? "");
   
   if(!clientOk){
     throw new Error("Credentials invalid");
   }
   const token = sign({email}, String(process.env.HASH) , {
     subject: exist.id,
       expiresIn: "1d"
     });
   return token
  }
}