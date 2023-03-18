import express, {request, response} from 'express'
import { clientRoutes } from './client.routes'
import { productRoutes } from './product.routes'
import { deliveryRoutes } from './delivery.routes'
import { userRoutes } from './user.routes'
const indexRoutes = express.Router()


indexRoutes.get('/',(request,response)=>{
 response.json( "olá mundo")
})

indexRoutes.use('/user',userRoutes)
indexRoutes.use('/client', clientRoutes)
indexRoutes.use('/product',productRoutes)
indexRoutes.use('/delivery',deliveryRoutes)

export { indexRoutes }