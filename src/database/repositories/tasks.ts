import { Tasks } from '@database/entities/tasks'
import { EntityRepository } from 'typeorm'

@EntityRepository(Tasks)
class TasksRepository {}

export { TasksRepository }
