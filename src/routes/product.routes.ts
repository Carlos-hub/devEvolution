import express from "express";
import { CreateProductController } from "../modules/Product/useCase/createProduct/createProductController";
import { EditProductController } from "../modules/Product/useCase/editProduct/editProductController";
const productRoutes = express.Router();

const createProductController = new CreateProductController();
const editProductController = new EditProductController();

productRoutes.post('/create',createProductController.handle)
productRoutes.put('/update/:id',editProductController.handle)



export { productRoutes }