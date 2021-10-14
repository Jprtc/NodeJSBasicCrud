import {Request,Response} from 'express'
import {ClientsServices} from '../services/ClientsServices'
class ClientsController{

    async create(request:Request, response:Response){
        const {name,telephone,email} = request.body

        const clientsService = new ClientsServices()

        try{
            const clients = await clientsService.create({name,telephone,email})
            return response.json(clients)

        } catch(err){
            return response
                .status(400)
                .json({mensagem: err.message})
        }    
    }
    async index(request: Request, response: Response){
        const clientsService = new ClientsServices();

        try {
            const clients = await clientsService.index()
            return response.status(200).json(clients)
        } catch (err) {
            return response
                .status(400)
                .json({mensagem: err.message})
        }
    }
    async show(request: Request, response: Response){
        const clientsService = new ClientsServices();
        const {id} = request.params;

        try {
            const clients = await clientsService.show({id})
            return response.status(200).json(clients)
        } catch (err) {
            return response
                .status(400)
                .json({mensagem: err.message})
        }
    }
}


export {ClientsController}