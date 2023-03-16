import  express from "express";
import { CreateDeliveryController } from "../modules/Delivery/useCase/createDelivery/CreateDeliveryController";
const deliveryRoutes = express.Router();

const createDelivery = new CreateDeliveryController();


deliveryRoutes.post('/create', createDelivery.handle)


export {deliveryRoutes}