import { Request, Response } from 'express';
import { DeleteProductUseCase } from './deleteProductUseCase';

export class DeleteProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteProductUseCase = new DeleteProductUseCase();

    try {
      await deleteProductUseCase.execute(id);
      return response.status(200).json({ message: 'Produto excluído com sucesso' });
    } catch (error) {
      return response.status(400).json({ message: 'Não foi possível excluir o produto' });
    }
  }
}