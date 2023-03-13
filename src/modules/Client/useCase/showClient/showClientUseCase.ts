import { Client } from "../../ModelClient/ClientModel";

interface IShowClient{
 id: string;
}

export class ShowClientUseCase{
 async execute(id:IShowClient ){
   const user = await Client.findById(id).exec();
   return user;
 }
}