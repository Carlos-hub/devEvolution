import express from 'express'
import { CreateUserController } from '../modules/User/useCase/CreateUser/CreateUserController';
import { AuthUserController } from '../modules/User/useCase/Auth/AuthUserController';

const userRoutes = express.Router();



const createUser = new CreateUserController();
const authUser = new AuthUserController();

userRoutes.post('/create',createUser.handle);
userRoutes.post('/auth',authUser.handle);






export {userRoutes}