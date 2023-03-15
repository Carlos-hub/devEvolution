import {Client} from '../../Model/ClientModel';

export class EditClientUseCase{
  async execute(id:string,body:object){
    const exist = await Client.findById(id)
    if(exist){
      await Client.updateOne({_id: id},{$set: body})
      return "User updated"
    }else{
      return "User not Exist!"
    }
  }
}