import mongoose, { mongo, now } from "mongoose";


const productSchema = new mongoose.Schema({
 name:{
  type:String,
  require: true
 },
 created_at:{
  type:Date,
  require: false,
  timestamps:true
 },
 price:{
  type: mongoose.Schema.Types.Decimal128,
  require:true
 },
 status:{
  type:String,
  require: true
 },
 description:{
  type: String,
  require: true
 }
})

const Product = mongoose.model('product',productSchema)

export {Product}