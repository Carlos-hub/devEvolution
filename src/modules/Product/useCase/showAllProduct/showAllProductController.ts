import { Request, Response } from 'express';
import {ShowAllProductUseCase} from './showAllProductUseCase';

class ShowAllProductController {
   async handle(request: Request, response: Response): Promise<Response> {
    const showAllProduct = new ShowAllProductUseCase()
    try {
      const products = await showAllProduct.execute();
      return response.status(200).json(products);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ message: 'Internal server error' });
    }
  }
}

export default ShowAllProductController;
