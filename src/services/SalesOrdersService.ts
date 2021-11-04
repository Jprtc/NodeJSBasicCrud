import {getCustomRepository} from 'typeorm'
import {SalesOrdersRepository} from '../repositories/SalesOrdersRepository'

interface iSalesOrdersServiceCreate{
    client_id:string;
    product_id:string;
    amount:number;
    saleDate:Date
}

interface ISalesOrdersID{
    id:string;
}

interface ISalesOrdersUpdate{
    id:string;
    client_id:string;
    product_id:string;
    amount:number;
    saleDate:Date;
}

class SalesOrdersService{

    async create({client_id,product_id,amount,saleDate}: iSalesOrdersServiceCreate){
        const salesOrdersService = getCustomRepository(SalesOrdersRepository)

        const salesOrders =  salesOrdersService.create({client_id,product_id,amount,saleDate})

        await salesOrdersService.save(salesOrders)
        return salesOrders

    }
    async index(){
        const salesOrdersService = getCustomRepository(SalesOrdersRepository)
            const salesOrders = await salesOrdersService.find({
                relations:['client','product']
            })

            if(salesOrders.length<=0){
            throw new Error('Não há vendas cadastradas')
            }
            return salesOrders
    }
    async show({id}: ISalesOrdersID){
        const salesOrdersService = getCustomRepository(SalesOrdersRepository)
        const salesOrders = await salesOrdersService.findOne(
            {id},
            {relations:['client','product']}
            )

        if(!salesOrders){
            throw new Error('Não há vendas com esse ID')
        }
        return salesOrders
    }
    async update({id,client_id,product_id,amount,saleDate}:ISalesOrdersUpdate){
        const salesOrdersService = getCustomRepository(SalesOrdersRepository)
        const salesOrders = await salesOrdersService.findOne({id})

        if(!salesOrders){
            throw new Error('Não há vendas com esse ID registrado')
        }
        await salesOrdersService.update(id,{client_id,product_id,amount,saleDate})
        const updatedSaleOrders = await salesOrdersService.findOne({id})
        return updatedSaleOrders
    }
    async delete({id}: ISalesOrdersID){
        const salesOrdersService = getCustomRepository(SalesOrdersRepository)
        const salesOrders = await salesOrdersService.findOne({id})

        if(!salesOrders){
            throw new Error('Não há vendas com esse ID registrado')
        }
        
        return await salesOrdersService.delete({id})
    }
}

export {SalesOrdersService}