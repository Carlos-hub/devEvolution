import { Delivery } from "../../Model/DeliveryModel";

export class ShowDeliveryUseCase{
 async execute(id: any){
  try{
    const delivery:any = await Delivery.find({clientId: id})
    .populate('product')
    .populate({path: 'clientId', model:'Client',select:'name'});
    console.log(delivery)
    return delivery;
  }catch(err){
    return err
  }

 }
}