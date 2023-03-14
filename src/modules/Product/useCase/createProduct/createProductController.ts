import { Request, Response } from 'express';
import { CreateProductUseCase } from './createProductUseCase';

export class CreateProductController {
  async handle(request: Request, response: Response) {
    try {
      const { name, created_at, price, status, description } = request.body;

      const createProductUseCase = new CreateProductUseCase();
      const product = await createProductUseCase.execute({
        name,
        created_at,
        price,
        status,
        description
      });

      return response.status(201).json(product);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ message: 'Internal server error' });
    }
  }
}
