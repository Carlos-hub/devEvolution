import mongoose from 'mongoose';


export function connectMongo(){
  mongoose.connect(String(process.env.URL))
  .then(() =>
    console.log("MongoDB Conectado"))
  .catch(err => console.log(err))
}