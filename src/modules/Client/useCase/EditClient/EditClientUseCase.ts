import {Client} from '../../Model/ClientModel';
import {ICreateClientDTO}from '../../DTO/IClient'
import {hash} from 'bcrypt';

export class EditClientUseCase{
  async execute(id:string,body:object){

    const exist = await Client.findById(id).exec();
    if(exist){
      await Client.updateOne({_id: id},{$set: body})
      return "User updated"
    }else{
      return "User not Exist!"
    }
  }
}