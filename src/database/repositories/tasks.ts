import { Tasks } from '@database/entities/tasks'
import { INewTasksData, ITasksRepository } from '@src/app/tasks/interfaces'
import { EntityRepository, ObjectType, Repository } from 'typeorm'

const category = (
	important: number,
	urgent: number
): 'DELETE' | 'DELEGATE' | 'DECIDE' | 'DO' => {
	const category =
		important <= 5 && urgent <= 5
			? 'DELETE'
			: important <= 5 && urgent >= 6
			? 'DELEGATE'
			: important >= 6 && urgent <= 5
			? 'DECIDE'
			: 'DO'

	return category
}

@EntityRepository(Tasks)
class TasksRepository extends Repository<Tasks> implements ITasksRepository {
	new = async ({ title, description, important, urgent }: INewTasksData) => {
		const tasks = this.create({
			title,
			description,
			important,
			urgent,
			category: category(important, urgent)
		})

		await this.save(tasks)

		return tasks
	}

	all = async () => {
		const tasks = await this.find()

		return tasks
	}
}

const TasksRepo: ObjectType<ITasksRepository> = TasksRepository

export { category, TasksRepo }
