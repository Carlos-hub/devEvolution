import { Client } from "../../Model/ClientModel";

export class DeleteClientAddressUseCase{
 async execute(userId:any,idRemove:any){
  const client = Client.updateOne({
   _id: userId,
   address: { $elemMatch: { _id: idRemove }}
 }, { 
   $pull: { address: idRemove }
 })
   .then(result => {
     console.log(result);
     return result
   })
   .catch(err => {
     console.log(err);
     return err;
   });
 }
}