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
  require: false
 },
 paymentMethod:{
  type: Object,
  require:true
 },
 deliveryAdress:{
  type:Object,
  require:true,
 },
 status:{
  type:String,
  require: true
 },
 product:{
  type: [productSchema],
  require: true
 },
 codDelivery:{
  type: Array,
  require:false
 },
 telphone:{
  type: String,
  require: true
 },
 orderPay:{
  type: Float32Array,
  require:true
 },
 clientId:{
  type: mongoose.Schema.Types.ObjectId, ref:'clients'
 },
 deliveryMan:{
  type: String,
  require: true
 }
})

const Delivery = mongoose.model('Delivery',deliverySchema)

export {Delivery}