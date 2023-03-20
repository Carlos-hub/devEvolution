import { Delivery } from "../../Model/DeliveryModel";

export class GeralUseCase{
 async execute(status:string){
   const totalPedidos = await Delivery.aggregate([
    {
     $match:{status:status}
    }
   ])
   .then(resultado =>{
    // console.log(resultado);
    return resultado;
   }).catch(err => {return err})
   return totalPedidos;
 }
}