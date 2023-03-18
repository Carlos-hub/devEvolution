import { compare } from "bcrypt";
import { User } from "../../Model/UserModel";
import { sign } from "jsonwebtoken";


export class AuthUserUseCase{
 async execute(email:string, senha:string){
     const userExist = await User.findOne({email})

     if(!userExist){
       return Error("Credentials invalid")
     }

     const clientOk = await compare(senha, userExist?.password ?? "");

     if(!clientOk){
      throw new Error("Credentials invalid");
    }

    const token = sign({email}, String(process.env.HASH) , {
     subject: userExist.id,
       expiresIn: "1d"
     });

     return token;


 }
}