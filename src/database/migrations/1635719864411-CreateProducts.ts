import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1635719864411 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"products",
                columns: [
                    {
                        name:"id",
                        type:'uuid',
                        isPrimary:true,
                    },
                    {
                        name:'prodName',
                        type:'varchar',
                    },
                    {
                    name:'unidadeMedida',
                    type:'varchar',
                    },
                    {
                        name:'created_at',
                        type:'timestamp',
                        default:"now()"
                    },
                    {
                        name:'updated_at',
                        type:'timestamp',
                        default:"now()"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products")
    }

}
