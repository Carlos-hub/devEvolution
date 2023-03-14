import { Client } from "../../Model/ClientModel";

export class DeleteClientUseCase{
 async execute(id:string){
  const deleteUser = await Client.findOneAndDelete({_id:id})
  if(deleteUser){
   return "User removed!"
  }
  else{
   return "User not Found"
  }
 }
}