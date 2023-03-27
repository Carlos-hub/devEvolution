import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs'
import { connectMongo } from './database/connection';
require('express-async-errors')
import cors from 'cors';
const app = express();
connectMongo();
const swaggerDoc = YAML.load('./swagger.yaml')


app.use(cors({
 origin:['http://191.240.128.110']
}))

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }));




// Routes
import { indexRoutes } from './routes/index.routes';



app.use('/',indexRoutes);
// Routes
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDoc))





export {app}
