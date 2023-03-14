import { Product } from "../../Model/ProductModel";


class EditProductUseCase {
  async execute(id: string, name: string, price: number, status: string, description: string) {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        { _id: id},
        { $set: { name, price, status, description } }
      );

      return updatedProduct;
    } catch (err) {
      return "Error product not exist"
    }
  }
}

export { EditProductUseCase };
