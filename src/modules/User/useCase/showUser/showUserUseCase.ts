import { User } from "../../Model/UserModel";

export class ShowUserUseCase{
 async execute(id:string | any ){
   const user = await User.findById(id).exec();
   return user;
 }
}