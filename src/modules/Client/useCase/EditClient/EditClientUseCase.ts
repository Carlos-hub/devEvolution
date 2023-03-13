import {Client} from '../../ModelClient/ClientModel';
import {ICreateClientDTO}from '../../DTO/IClient'
import {hash} from 'bcrypt';

export class EditClientUseCase{
  async execute(id:string,body:object){

    const exist = await Client.findById(id).exec();
    await Client.updateOne({_id: id},{$set: body})
    return "Usuário alterado com sucesso"
  }
}