import mongoose, { now } from "mongoose";


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
  type: String,
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