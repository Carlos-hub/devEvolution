import { Request, Response } from 'express';
import { EditProductUseCase } from './editProductUseCase';

export class EditProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, price, status, description } = request.body;

    const editProductUseCase = new EditProductUseCase();

    try {
      const product = await editProductUseCase.execute(
        id,
        name,
        price,
        status,
        description,
      );

      return response.status(200).json(product);
    } catch (error) {
      return response.status(400).json({
        error 
      });
    }
  }
}


