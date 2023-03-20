import { Client } from "../../Model/ClientModel";

export class ShowClientUseCase{
 async execute(id:string | any ){
   const user:any = await Client.findById(id).exec();
   console.log( await user)
   return user;
 }
}