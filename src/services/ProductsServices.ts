import {getCustomRepository} from 'typeorm'
import { ProductsRepository } from '../repositories/ProductsRepository'

interface IProductsCreate{
    prodName: string;
    unidadeMedida: string;
}

interface IProductsID{
    id: string;
}

interface IProductsUpdate{
    id:string;
    prodName:string;
    unidadeMedida:string;
}

class ProductsServices{

    async index(){
    const productsRepository = getCustomRepository(ProductsRepository)
        const products = await productsRepository.find();

        if (products.length<0){
            throw new Error('Não há produtos cadastrados.')
        }
        return products
    }

    async create({prodName,unidadeMedida}:IProductsCreate){
        const productsRepository = getCustomRepository(ProductsRepository)

        const prodExists = await productsRepository.findOne({prodName})

        if(prodExists){
            throw new Error('Produto já existe!!')
        }

        const products = productsRepository.create({prodName,unidadeMedida})

        await productsRepository.save(products)

        return products
    }

    async show({id} : IProductsID){
        const productsRepository = getCustomRepository(ProductsRepository)
        const products = await productsRepository.findOne({id})

        if(!products){
            throw new Error('Não há produtos com esse ID')
        }

        return products
    }

    async update({id,prodName,unidadeMedida}:IProductsUpdate){
        const productsRepository = getCustomRepository(ProductsRepository)
        const products = await productsRepository.findOne({id})

        if(!products){
            throw new Error('Não há produtos com esse ID registrado')
        }
        await productsRepository.update(id,{prodName,unidadeMedida})
        const updatedproducts = await productsRepository.findOne({id})
        return updatedproducts
    }

    async delete({id}: IProductsID){
        const productsRepository = getCustomRepository(ProductsRepository)
        const products = await productsRepository.findOne({id})

        if(!products){
            throw new Error('Não há produtos com esse ID registrado')
        }
        
        return await productsRepository.delete({id})
    }
}

export {ProductsServices}