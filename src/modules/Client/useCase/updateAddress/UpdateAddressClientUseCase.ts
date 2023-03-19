import { ICreateClientDTO } from "../../DTO/IClient";
import { Client } from "../../Model/ClientModel";
import mongoose from 'mongoose';

interface Address {
  street?: string;
  houseNumber?: string;
  city?: string;
  district?: string;
  landmark?: string;
}

interface ClientDocument extends mongoose.Document {
  name: string;
  email: string;
  phone: string;
  password: string;
  address: Address[];
  avatar?: string;
}
export class UpdateAddressClientUseCase{

  async execute(id:string,address:object){
    try {
      const client =  await Client.findOneAndUpdate({_id: id}, {$push: {endereco: address}}, {new: true})
      .then(user => {
        console.log(user);
      })
      .catch(err => {
        console.log(err);
      });
      return await client;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  
}

