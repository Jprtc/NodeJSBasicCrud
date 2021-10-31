import {Request,Response} from 'express'
import {ProductsServices} from '../services/ProductsServices'

class ProductsController{
    async index (request: Request, response: Response){
        const productsService = new ProductsServices()

        try {
            const products = await productsService.index()
            return response.status(200).json(products)
        } catch (err) {
            return response
                .status(400)
                .json({mensagem: err.message})
        }
    }

    async create(request: Request, response: Response){
        const {prodName,unidadeMedida} = request.body
        const productsService = new ProductsServices()

        try{
            const products = await productsService.create({prodName,unidadeMedida})
            return response.json(products)

        } catch(err){
            return response
                .status(400)
                .json({mensagem: err.message})
        }    
    }

    async show(request: Request, response: Response){}

    async update(request: Request, response: Response){}

    async delete(request: Request, response: Response){}
}


export {ProductsController}