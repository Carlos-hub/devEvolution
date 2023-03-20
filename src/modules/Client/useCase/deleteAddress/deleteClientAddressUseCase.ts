import { Client } from "../../Model/ClientModel";

export class DeleteClientAddressUseCase{
 async execute(userId:any,idRemove:any){
  console.log(userId,idRemove)
    try {
     const result = await Client.updateOne(
       { _id: userId },
       { $pull: { endereco: { _id: idRemove } } }
     ).then(resultado =>{console.log(resultado)})
     .catch(err =>{ console.log(err)})
     console.log(result);
     return result;
   } catch (err) {
     console.log(err);
     return err;
   }
}
}