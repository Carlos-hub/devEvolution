import express, {request, response} from 'express'
import { clientRoutes } from './client.routes'
import { productRoutes } from './product.routes'
const indexRoutes = express.Router()


indexRoutes.use('/client', clientRoutes)
indexRoutes.use('/product',productRoutes)
indexRoutes.get('/',(request,response)=>{
 response.json( "olá mundo")
})

export { indexRoutes }