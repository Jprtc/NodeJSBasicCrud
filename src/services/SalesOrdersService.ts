import {getCustomRepository} from 'typeorm'
import {SalesOrdersRepository} from '../repositories/SalesOrdersRepository'

interface iSalesOrdersServiceCreate{
    client_id:string;
    product_id:string;
    amount:number;
    saleDate:Date
}

class SalesOrdersService{

    async create({client_id,product_id,amount,saleDate}: iSalesOrdersServiceCreate){
        const salesOrdersService = getCustomRepository(SalesOrdersRepository)

        const salesOrders =  salesOrdersService.create({client_id,product_id,amount,saleDate})

        await salesOrdersService.save(salesOrders)
        return salesOrders

    }
    index(){

    }
}

export {SalesOrdersService}