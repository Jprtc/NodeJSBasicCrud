import {Entity, PrimaryColumn,Column, UpdateDateColumn, CreateDateColumn} from 'typeorm'
import {v4 as uuid} from 'uuid'


@Entity('clients')
class Client{

    @PrimaryColumn()
    id: string

    @Column()
    name:string

    @Column()
    telephone:string

    @Column()
    email:string

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

export {Client}