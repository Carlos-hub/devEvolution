import  express from "express";
import { CreateDeliveryController } from "../modules/Delivery/useCase/createDelivery/CreateDeliveryController";
import { isAuthenticate } from "../middleware/isAuthenticate";
import { ShowDeliveryUserController } from "../modules/Delivery/useCase/showDeliveryUser/showDeliveryUserController";

const deliveryRoutes = express.Router();


const createDelivery = new CreateDeliveryController();
const showDelivery = new ShowDeliveryUserController();

deliveryRoutes.post('/create', isAuthenticate ,createDelivery.handle)
deliveryRoutes.get('/showall', isAuthenticate, showDelivery.handle)


export {deliveryRoutes}