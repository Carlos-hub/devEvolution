import express from "express";
const productRoutes = express.Router();
import { isAuthenticate } from "../middleware/isAuthenticate";
import { CreateProductController } from "../modules/Product/useCase/createProduct/createProductController";
import { EditProductController } from "../modules/Product/useCase/editProduct/editProductController";
import { DeleteProductController } from "../modules/Product/useCase/deleteProduct/deleteProductController";
import { ShowProductController } from "../modules/Product/useCase/showProductUnique/showProductController";
import ShowAllProductController from "../modules/Product/useCase/showAllProduct/showAllProductController";
import { CreateManyProductsController } from "../modules/Product/useCase/createManyProductsAuto/createManyProductsController";
const createProductController = new CreateProductController();
const editProductController = new EditProductController();
const deleteProductController = new DeleteProductController();
const showProductController = new ShowProductController();
const showAllProductController = new ShowAllProductController();
const createManyProductsController = new CreateManyProductsController();

productRoutes.get('/show',isAuthenticate,showAllProductController.handle)
productRoutes.get('/show/:id',isAuthenticate,showProductController.handle)
productRoutes.post('/create',isAuthenticate,createProductController.handle)
productRoutes.put('/update/:id',isAuthenticate,editProductController.handle)
productRoutes.delete('/delete/:id',isAuthenticate,deleteProductController.handle)
productRoutes.post('/createmany',isAuthenticate,createManyProductsController.handle)



export { productRoutes }