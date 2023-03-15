import { Client } from "../../Model/ClientModel";

export class ShowClientUseCase{
 async execute(id:string | any ){
   const user = await Client.findById(id).exec();
   return user;
 }
}