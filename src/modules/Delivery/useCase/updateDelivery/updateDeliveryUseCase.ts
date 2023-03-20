import { Delivery } from "../../Model/DeliveryModel";

export class UpdateDeliveryUSeCase{
  async execute(id:string,status:string){
   // console.log(id,status)
   try{
     const updateDelivery = await Delivery.updateOne({_id:id},{status:status})
     return updateDelivery;
   }catch(err){
    return err;
   }
  }
}