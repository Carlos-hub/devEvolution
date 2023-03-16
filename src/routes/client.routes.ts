import express,{Request, Response} from "express";
import { CreateClientController } from "../modules/Client/useCase/createClient/CreateClientController";
import { EditClientController } from "../modules/Client/useCase/EditClient/EditClientController";
import { ShowClientController } from "../modules/Client/useCase/showClient/showClientController";
import { DeleteClientController } from "../modules/Client/useCase/deleteClient/DeleteClientController";
import { AuthenticateClientController } from "../modules/Client/useCase/authenticateClient/authenticateClienteController";
import { UpdateAddressController } from "../modules/Client/useCase/removeAddress/updateAddressClienteController";
import { isAuthenticate } from "../middleware/isAuthenticate";
import { DeleteClientAddressController } from "../modules/Client/useCase/deleteAddress/deleteClientAddressController";

const createClientController = new CreateClientController();
const editClientController = new EditClientController();
const showClientController = new ShowClientController();
const deleteClientController = new DeleteClientController();
const updateAddres = new UpdateAddressController();
const deleteAddress = new DeleteClientAddressController();
const clientRoutes = express.Router();
const authClient = new AuthenticateClientController();

clientRoutes.get('/',(request:Request,response:Response) =>{
 response.json("All Right baby")
})
clientRoutes.put('/edit/',isAuthenticate,editClientController.handle);
clientRoutes.post('/create',createClientController.handle);
clientRoutes.get('/show',isAuthenticate,showClientController.handle);
clientRoutes.delete('/delete/:id',isAuthenticate,deleteClientController.handle)
clientRoutes.post('/auth',authClient.handle);
clientRoutes.post('/address',updateAddres.handle)
clientRoutes.get('/address/delete/:id',deleteAddress.handle)


export {clientRoutes}