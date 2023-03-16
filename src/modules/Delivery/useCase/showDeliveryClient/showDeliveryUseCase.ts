import { Delivery } from "../../Model/DeliveryModel";

export class ShowDeliveryUseCase{
 async execute(id: any){
  try{
    const delivery = await Delivery.find({clientId: id}).populate('product')
    return delivery;
  }catch(err){
    return err
  }

 }
}