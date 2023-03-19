import { User } from "../../Model/UserModel"

export class DeleteUserUseCase{
 async execute(id:string){
  const deleteUser = await User.findOneAndDelete({_id:id})
  if(deleteUser){
   return "User removed!"
  }
  else{
   return "User not Found"
  }
 }
}