import { Client } from "../../Model/ClientModel";

export class DeleteClientAddressUseCase{
 async execute(userId:any,idRemove:any){
  console.log(userId,idRemove)
    try {
     const result = await Client.updateOne(
       { _id: userId },
       { $pull: { address: { _id: idRemove } } }
     );
     console.log(result);
     return result;
   } catch (err) {
     console.log(err);
     return err;
   }
}
}