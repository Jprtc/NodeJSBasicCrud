import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSalesOrders1635894280194 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'saleOrders',
                columns:[
                    {
                        name:'id',
                        type:'uuid',
                        isPrimary: true
                    },
                    {
                        name:'client_id',
                        type:'uuid',
                        isNullable: false
                    },
                    {
                        name:'product_id',
                        type:'uuid',
                        isNullable: false
                    },
                    {
                        name:'amount',
                        type:'number',
                    },
                    {
                        name:'saleDate',
                        type:'Date',
                    },
                    {
                        name:'created_at',
                        type:'timestamp',
                        default: 'now()'
                    },
                    {
                        name:'updated_at',
                        type:'timestamp',
                        default: 'now()'
                    },
                ],
                foreignKeys:[
                    {
                        name:'FKClient',
                        referencedTableName: 'clients',
                        referencedColumnNames: ['id'],
                        columnNames: ['client_id'],
                        onDelete: 'SET NULL',
                        onUpdate:'SET NULL'
                    },
                    {
                        name:'FKProduct',
                        referencedTableName: 'products',
                        referencedColumnNames: ['id'],
                        columnNames:['product_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('salesOrders')
    }

}
