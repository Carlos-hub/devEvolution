import { hash } from "bcrypt";
import { User } from "../../Model/UserModel";

export class CreateUserUseCase{
 async execute(
  name:string,
  age:any,
  cpf:string,
  email:string,
  password:string,
  phone:string
  ){
   const hashPassword = await hash(password,10);
   const client = await User.create({
   name,
   age,
   cpf,
   email,
   password:hashPassword,
   phone
   });
   return client
 }
}