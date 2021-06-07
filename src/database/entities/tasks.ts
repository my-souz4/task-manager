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

	@Column()
	status: string

	@CreateDateColumn()
	created_at: Date

	@UpdateDateColumn()
	updated_at: Date

	constructor(props: Omit<Tasks, 'id'>, id?: string) {
		Object.assign(this, props)

		if (!id) {
			this.id = v4()
		}

		if (this.important <= 5 && this.urgent <= 5) {
			this.category = 'DELETE'
		} else if (this.important <= 5 && this.urgent >= 6) {
			this.category = 'DELEGATE'
		} else if (this.important >= 6 && this.urgent <= 5) {
			this.category = 'DECIDE'
		} else if (this.important >= 6 && this.urgent >= 6) {
			this.category = 'DO'
		}
	}
}

export { Tasks }
