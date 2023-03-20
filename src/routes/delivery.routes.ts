import  express from "express";
import { CreateDeliveryController } from "../modules/Delivery/useCase/createDelivery/CreateDeliveryController";
import { isAuthenticate } from "../middleware/isAuthenticate";
import { ShowDeliveryUserController } from "../modules/Delivery/useCase/showDeliveryUser/showDeliveryUserController";
import { UpdateDeliveryController } from "../modules/Delivery/useCase/updateDelivery/updateDeliveryController";
import { GeralController } from "../modules/Delivery/useCase/geral/geralController";

const deliveryRoutes = express.Router();


const createDelivery = new CreateDeliveryController();
const showDelivery = new ShowDeliveryUserController();
const updateDelivery = new UpdateDeliveryController();
const geralDelivery = new GeralController();

deliveryRoutes.post('/create', isAuthenticate ,createDelivery.handle)
deliveryRoutes.get('/showall', isAuthenticate, showDelivery.handle)
deliveryRoutes.put('/update/:id', isAuthenticate, updateDelivery.handle)
deliveryRoutes.get('/get/status', isAuthenticate, geralDelivery.handle)


export {deliveryRoutes}