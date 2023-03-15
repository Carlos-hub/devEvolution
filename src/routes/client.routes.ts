import express,{Request, Response} from "express";
import { CreateClientController } from "../modules/Client/useCase/createClient/CreateClientController";
import { EditClientController } from "../modules/Client/useCase/EditClient/EditClientController";
import { ShowClientController } from "../modules/Client/useCase/showClient/showClientController";
import { DeleteClientController } from "../modules/Client/useCase/deleteClient/DeleteClientController";
import { AuthenticateClientController } from "../modules/Client/useCase/authenticateClient/authenticateClienteController";

const createClientController = new CreateClientController();
const editClientController = new EditClientController();
const showClientController = new ShowClientController();
const deleteClientController = new DeleteClientController();
const clientRoutes = express.Router();
import { isAuthenticate } from "../middleware/isAuthenticate";
const authClient = new AuthenticateClientController();

clientRoutes.get('/',(request:Request,response:Response) =>{
 response.json("All Right baby")
})
clientRoutes.put('/edit/',isAuthenticate,editClientController.handle);
clientRoutes.post('/create',createClientController.handle);
clientRoutes.get('/show',isAuthenticate,showClientController.handle);
clientRoutes.delete('/delete/:id',isAuthenticate,deleteClientController.handle)
clientRoutes.post('/auth',authClient.handle)


export {clientRoutes}