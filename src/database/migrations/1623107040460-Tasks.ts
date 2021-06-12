import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class Tasks1623107040460 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'tasks',
				columns: [
					{
						name: 'id',
						type: 'varchar',
						isPrimary: true
					},
					{
						name: 'title',
						type: 'varchar'
					},
					{
						name: 'description',
						type: 'varchar'
					},
					{
						name: 'urgent',
						type: 'integer'
					},
					{
						name: 'important',
						type: 'integer'
					},
					{
						name: 'category',
						type: 'varchar'
					},
					{
						name: 'status',
						type: 'varchar',
						default: "'DO'"
					},
					{
						name: 'created_at',
						type: 'timestamp',
						default: 'now()'
					},
					{
						name: 'updated_at',
						type: 'timestamp',
						default: 'now()'
					}
				]
			})
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('tasks')
	}
}
