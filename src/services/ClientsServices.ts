import {getCustomRepository} from 'typeorm'
import {ClientsRepository} from '../repositories/ClientsRepository'

interface IClientsCreate{
    name: string;
    telephone: string;
    email: string;
}

interface IClientsShow{
    id: string;
}

interface IClientsShowByEmail{
    email: string;
}

class ClientsServices{

   async create({name,telephone,email}: IClientsCreate){
        const clientsRepository = getCustomRepository(ClientsRepository)

        const emailAlreadyExists = await clientsRepository.findOne({email})

        if(emailAlreadyExists){
            throw new Error('Email já existente!!')
        }

        const clients = clientsRepository.create({
            name,
            telephone,
            email
        })

       await clientsRepository.save(clients)

        return clients
    }

    async index(){
        const clientsRepository = getCustomRepository(ClientsRepository)

        const clients = await clientsRepository.find()

        if(clients.length<1){
            throw new Error('Não há clientes cadastrados.')
        }

        return clients
    }

    async show({id} : IClientsShow){
        const clientsRepository = getCustomRepository(ClientsRepository)
        const clients = await clientsRepository.findOne({id})

        if(!clients){
            throw new Error('Não há clientes com esse ID')
        }

        return clients
    }

    async showEmail({email} :IClientsShowByEmail){
        const clientsRepository = getCustomRepository(ClientsRepository)
        const clients = await clientsRepository.findOne({email})

        if(!email){
            throw new Error('Não há clientes com esse e-mail.')
        }

        return clients

    }

}

export {ClientsServices}