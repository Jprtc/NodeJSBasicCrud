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

    async show(request: Request, response: Response){
        const productsService = new ProductsServices();
        const {id} = request.params;

        try {
            const products = await productsService.show({id})
            return response.status(200).json(products)
        } catch (err) {
            return response
                .status(400)
                .json({mensagem: err.message})
        }
    }

    async update(request: Request, response: Response){
        const {prodName,unidadeMedida} = request.body
        const {id} = request.params;

        const productsService = new ProductsServices();

        try {
            const products = await productsService.update({id,prodName,unidadeMedida})
            return response.status(200).json(products)
        } catch (error) {
            return response.status(400).json({mensagem: error.message})
        }

    }

    async delete(request: Request, response: Response){
        const productsService = new ProductsServices();
        const {id} = request.params;

        try {
            const products = await productsService.delete({id})
            return response.status(200).json({message: 'Produto excluido com sucesso!'})
        } catch (error) {
            return response.status(400).json({mensagem: error.message})
        }
    }
}


export {ProductsController}