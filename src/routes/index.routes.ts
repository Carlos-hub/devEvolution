import express, {request, response} from 'express'
import { clientRoutes } from './client.routes'

const indexRoutes = express.Router()


indexRoutes.use('/client', clientRoutes)

indexRoutes.get('/',(request,response)=>{
 response.json( "olá mundo")
})

export { indexRoutes }