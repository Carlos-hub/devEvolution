import {Client} from '../../Model/ClientModel';
import {ICreateClientDTO}from '../../DTO/IClient'
import {hash} from 'bcrypt';

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
      return new Error("Invalid Email")
     }
     const existEmail = await Client.findOne({email: email})
     console.log(existEmail?.email);
     const hashPassword = await hash(password,10)
     if(existEmail?.email){
      throw new Error("Invalid Email already in use")
     }
        const newClient = new Client({
         name,
         age,
         cpf,
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
        return existEmail?.email;

  }
}