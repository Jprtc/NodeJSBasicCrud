import {Entity, PrimaryColumn,Column, UpdateDateColumn, CreateDateColumn} from 'typeorm'
import {v4 as uuid} from 'uuid'

@Entity(`products`)
class Product{
    @PrimaryColumn()
    id:string;

    @Column()
    prodName:string;

    @Column()
    unidadeMedida:string;

    @UpdateDateColumn()
    updated_at:Date

    @CreateDateColumn()
    created_at:Date

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

export {Product}
