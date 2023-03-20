import { Request, Response } from "express";
import { GeralUseCase } from "./geralUseCase";

export class GeralController{
 async handle(request:Request,response:Response){
   const {status} = request.body;
   const agrega = new GeralUseCase();
   const totalPedidos = await agrega.execute(status);
   return response.status(200).json(totalPedidos)
 }
}