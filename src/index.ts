import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import "../.env";
import express from 'express'
import { connectMongo } from './database/connection';
require('express-async-errors')
const app = express();

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }));
connectMongo();

// Routes
import { indexRoutes } from './routes/index.routes';


app.use('/',indexRoutes);
// Routes






export {app}