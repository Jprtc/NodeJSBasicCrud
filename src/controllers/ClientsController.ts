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

    async showByEmail(request: Request, response: Response){
        const clientsService = new ClientsServices();
        const {email} = request.params;

        try {
            const clients = await clientsService.showEmail({email})
            return response.status(200).json(clients)
        } catch (err) {
            return response.status(400).json({mensagem: err.message})
        }
    }

    async delete(request: Request, response: Response){
        const clientsService = new ClientsServices();
        const {id} = request.params;

        try {
            const clients = await clientsService.delete({id})
            return response.status(200).json({message: 'Cliente excluido com sucesso!'})
        } catch (error) {
            return response.status(400).json({mensagem: error.message})
        }
    }

    async update(request: Request, response: Response){
        const {name,telephone,email} = request.body
        const {id} = request.params;

        const clientsService = new ClientsServices();

        try {
            const clients = await clientsService.update({id, name,telephone, email})
            return response.status(200).json(clients)
        } catch (error) {
            return response.status(400).json({mensagem: error.message})
        }
    }

}


export {ClientsController}