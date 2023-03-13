import express,{Request, Response} from "express";
import { CreateClientController } from "../modules/Client/useCase/createClient/CreateClientController";
import { EditClientController } from "../modules/Client/useCase/EditClient/EditClientController";
import { ShowClientController } from "../modules/Client/useCase/showClient/showClientController";


const createClientController = new CreateClientController();
const editClientController = new EditClientController();
const showClientController = new ShowClientController();
const clientRoutes = express.Router();

clientRoutes.get('/',(request:Request,response:Response) =>{
 response.json("All Right baby")
})
clientRoutes.put('/edit/:id',editClientController.handle);
clientRoutes.post('/create',createClientController.handle);
clientRoutes.get('/show',showClientController.handle)


export {clientRoutes}