import express from 'express'
import { CreateUserController } from '../modules/User/useCase/CreateUser/CreateUserController';
import { AuthUserController } from '../modules/User/useCase/Auth/AuthUserController';
import { DeleteUserController } from '../modules/User/useCase/deleteUser/DeleteUserController';
import { isAuthenticate } from '../middleware/isAuthenticate';
import { EditUserController } from '../modules/User/useCase/EditUser/EditUserController';

const userRoutes = express.Router();



const createUser = new CreateUserController();
const authUser = new AuthUserController();
const deleteUSer = new DeleteUserController();
const editUser = new EditUserController;

userRoutes.post('/create',createUser.handle);
userRoutes.post('/auth',authUser.handle);
userRoutes.delete('/delete',isAuthenticate, deleteUSer.handle)
userRoutes.put('/edit',isAuthenticate, editUser.handle)






export {userRoutes}