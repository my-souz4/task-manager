import { INewTasksData } from '@src/app/tasks/interfaces'
import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryColumn,
	UpdateDateColumn
} from 'typeorm'
import { v4 } from 'uuid'

@Entity('tasks')
class Tasks {
	@PrimaryColumn()
	readonly id: string

	@Column()
	title: string

	@Column()
	description: string

	@Column()
	urgent: number

	@Column()
	important: number

	@Column()
	category: string

	@Column({ default: 'DO' })
	status: string

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date

	constructor(props: Omit<INewTasksData, 'id'>, id?: string) {
		Object.assign(this, props)

		if (!id) {
			this.id = v4()
		}
	}
}

export { Tasks }
