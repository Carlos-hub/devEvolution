import { Product } from "../../Model/ProductModel";

export class DeleteProductUseCase {
  async execute(id: string) {
    try {
      const result = await Product.deleteOne({ _id:id });

      if (result.deletedCount === 0) {
        return {
          success: false,
          message: "Produto não encontrado.",
        };
      }

      return {
        success: true,
        message: "Produto excluído com sucesso.",
      };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: "Erro ao excluir o produto.",
      };
    }
  }
}
