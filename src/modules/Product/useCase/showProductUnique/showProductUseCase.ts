import { Product } from "../../Model/ProductModel";

export class ShowProductUseCase {
  async execute(id: string) {
    try {
      const product = await Product.findOne({ _id: id });
      if (!product) {
        return "Produto não encontrado"
      }

      return product;
    } catch (error) {
      return error
    }
  }
}


