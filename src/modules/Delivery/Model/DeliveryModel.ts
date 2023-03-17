import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema({
 id:{
  type: mongoose.Schema.Types.ObjectId, ref:'products',
  require: true
 }
})

const deliverySchema = new mongoose.Schema({
 name:{
  type:String,
  require: true
 },
 created_at:{
  type:Date,
  require: false,
  timestamp:true
 },
 paymentMethod:{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Client.paymentMethod._id',
  require:true
 },
 deliveryAddress:{
  type:mongoose.Schema.Types.ObjectId,
  ref: 'Client.endereco._id',
  require:true,
 },
 status:{
  type:String,
  require: true
 },
 product:{
  type: [mongoose.Schema.Types.ObjectId],
  ref:'product',
  require: true
 },
 codDelivery:{
  type: String,
  require:true
 },
 telphone:{
  type: String,
  require: true
 },
 orderPay:{
  type: mongoose.Types.Decimal128,
  require:true
 },
 clientId:{
  type: mongoose.Schema.Types.ObjectId, ref:'client',
  require: true
 },
 deliveryMen:{
  type: String,
  require: true
 }
})

const Delivery = mongoose.model('Delivery',deliverySchema)

export {Delivery}