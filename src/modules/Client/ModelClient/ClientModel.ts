import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
 street:{type: String, require: false},
 houseNumber:{type: String, require:false},
 city:{type:String,require:false},
 district:{type: String, require:false},
 landmark:{type: String, require:false}
})

const paymentSchema = new mongoose.Schema({
  payMethod:{ type: String, require:false},
  numberCard:{type: String, require:false},
  dateCard:{type:String,require:false},
  codCard:{type:String,require:false},
  nameCard:{type: String,require:false}
})


const clientSchema = new mongoose.Schema({
 name:{
  type:String,
  require: true
 },
 age:{
  type:Number,
  require: false
 },
 endereco:[locationSchema],
 cpf:{
  type: String,
  require:true
 },
 paymentMethod:[paymentSchema],
 email:{
  type:String,
  require:true,
  unique:true
 },
 password:{
  type:String,
  require: true
 },
 bornDate:{
  type: Date,
  require: false
 },
 orderHistory:{
  type: Array,
  require:false
 },
 telphone:{
  type: String,
  require: true
 },
 avatar:{
  type: String,
  require:false
 }
})

const Client = mongoose.model('Client',clientSchema)

export {Client}