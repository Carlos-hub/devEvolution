import { User } from "../../Model/UserModel"

export class EditUserUseCase{
  async execute(id:string,body:object){
    const exist = await User.findById(id)
    if(exist){
      await User.updateOne({_id: id},{$set: body})
      return "User updated"
    }else{
      return "User not Exist!"
    }
  }
}