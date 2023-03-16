import  express from "express";
import { CreateDeliveryController } from "../modules/Delivery/useCase/createDelivery/CreateDeliveryController";
import { isAuthenticate } from "../middleware/isAuthenticate";
const deliveryRoutes = express.Router();


const createDelivery = new CreateDeliveryController();


deliveryRoutes.post('/create', isAuthenticate ,createDelivery.handle)


export {deliveryRoutes}