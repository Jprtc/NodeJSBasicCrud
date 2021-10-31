import {Router} from 'express'
import {ClientsController} from './controllers/ClientsController'
import {ProductsController} from './controllers/ProductsController'
const routes = Router()

const clientsController = new ClientsController()
const productsController = new ProductsController()

routes.post('/clients' , clientsController.create)
routes.get('/clients', clientsController.index)
routes.get('/clients/:id', clientsController.show)
routes.delete('/clients/:id', clientsController.delete)
routes.put('/clients/:id', clientsController.update)

routes.get('/products', productsController.index)
routes.post('/products', productsController.create)
routes.get('/products/:id', productsController.show)
routes.delete('/products/:id', productsController.delete)
routes.put('/products/:id', productsController.update)

routes.get('/clients/email/:email', clientsController.showByEmail)


export {routes}