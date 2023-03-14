import { Request, Response } from 'express';
import { ShowProductUseCase } from './showProductUseCase';

export class ShowProductController{
 async handle(request: Request, response: Response) {
  const { id } = request.params;

  const showProductUseCase = new ShowProductUseCase();

  try {
    const product = await showProductUseCase.execute(id);
    return response.status(200).json(product);
  } catch (error) {
    return response.status(400).json({
       error
    });
  }
 }
}

