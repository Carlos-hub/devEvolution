
export interface ICreateClientDTO{
 name: string;
 age?: number;
 adress?: Object;
 cpf: string;
 paymentMethod?: Object;
 email: string;
 password: string;
 bornDate?: Date;
 orderHistory?: Object;
 avatar?: string;
}