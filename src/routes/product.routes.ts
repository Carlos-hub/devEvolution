import express from "express";
const productRoutes = express.Router();
import { CreateProductController } from "../modules/Product/useCase/createProduct/createProductController";
import { EditProductController } from "../modules/Product/useCase/editProduct/editProductController";
import { DeleteProductController } from "../modules/Product/useCase/deleteProduct/deleteProductController";
import { ShowProductController } from "../modules/Product/useCase/showProductUnique/showProductController";
import ShowAllProductController from "../modules/Product/useCase/showAllProduct/showAllProductController";
const createProductController = new CreateProductController();
const editProductController = new EditProductController();
const deleteProductController = new DeleteProductController();
const showProductController = new ShowProductController();
const showAllProductController = new ShowAllProductController();

productRoutes.get('/show',showAllProductController.handle)
productRoutes.get('/show/:id',showProductController.handle)
productRoutes.post('/create',createProductController.handle)
productRoutes.put('/update/:id',editProductController.handle)
productRoutes.delete('/delete/:id',deleteProductController.handle)



export { productRoutes }