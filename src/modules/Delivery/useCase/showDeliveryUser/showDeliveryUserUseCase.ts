import { User } from "../../../User/Model/UserModel";
import { Delivery } from "../../Model/DeliveryModel";

export class ShowDeliveryUserUseCase{
 async execute(id: any){
  try{
    const userExist = User.find({_id:id})
    console.log(userExist)
    if(!userExist){
      return Error("Usuário não existe")
    }
    const delivery:any = await Delivery.find()
    .populate('product')
    .populate({path: 'clientId', model:'Client',select:'name'});
    return delivery;
  }catch(err){
    return err
  }

 }
}