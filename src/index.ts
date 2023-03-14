import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import { connectMongo } from './database/connection';
require('express-async-errors')
const app = express();
connectMongo();

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Routes
import { indexRoutes } from './routes/index.routes';


app.use('/',indexRoutes);
// Routes






export {app}