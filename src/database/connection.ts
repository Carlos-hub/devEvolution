import mongoose from 'mongoose';


export function connectMongo(){
  mongoose.connect(process.env.HASH)
  .then(() =>
    console.log("MongoDB Conectado"))
  .catch(err => console.log(err))
}