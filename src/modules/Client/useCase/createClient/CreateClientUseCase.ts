import {Client} from '../../ModelClient/ClientModel';
import {ICreateClientDTO}from '../../DTO/IClient'
import {hash} from 'bcrypt';
require('dotenv').config()

export class CreateClientUseCase{
  async execute({
   name,
   age,
   adress,
   cpf,
   paymentMethod,
   email,
   password,
   bornDate,
   orderHistory,
   avatar,
  }:ICreateClientDTO){
     if(email ==""){
      throw new Error("Invalid Email")
     }
     
      const verifyEmail = await Client.find({email: email}).exec();
      const hashPassword = await hash(password,10)
      if(!verifyEmail){
       throw new Error("Invalid Email already in use")
      }
      const newClient = new Client({
       name,
       age,
       adress,
       paymentMethod,
       email,
       password:hashPassword,
       bornDate,
       orderHistory,
       avatar
      });
      newClient.save()
      .then(() => {return "Cliente criado com sucesso"} )
      .catch((err) => console.log(err))
      return newClient
  }
}