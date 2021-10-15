import {Router} from 'express'
import {ClientsController} from './controllers/ClientsController'

const routes = Router()

const clientsController = new ClientsController()

routes.post('/clients' , clientsController.create)
routes.get('/clients', clientsController.index)
routes.get('/clients/:id', clientsController.show)
routes.get('/clients/email/:email', clientsController.showByEmail)
// routes.post('/clients', executarController.metodoControle)
// routes.get('/clients', executarController.metodoControle)
// routes.delete('/clients', executarController.metodoControle)
// routes.put('/clients', executarController.metodoControle)

export {routes}