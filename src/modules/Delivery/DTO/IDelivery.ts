
export interface ICreateDeliveryDTO{
 name:string;
 created_at:Date;
 paymentMethod:Object;
 deliveryAdress:Object;
 status: string;
 product:Array<object>;
 codDelivery:string;
 telphone:string;
 orderPay:string;
 clientId:string;
 deliveryMan:string
}