import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
 name:{
  type:String,
  require: true
 },
 age:{
  type:Number,
  require: false
 },
 cpf:{
  type: String,
  require:true
 },
 email:{
  type:String,
  require:true,
  unique:true
 },
 password:{
  type:String,
  require: true
 },
 phone:{
  type: String,
  require: true
 }
})

const User = mongoose.model('User',userSchema)

export {User}