import { Tasks } from '@database/entities/tasks'

export interface ITasksData {
	id: string
	title: string
	description: string
	urgent: number
	important: number
	category: 'DELETE' | 'DELEGATE' | 'DECIDE' | 'DO'
	status: 'DO' | 'DONE'
	createdAt: Date
	updatedAt: Date
}

export interface ITasksRepository {
	new: (props: INewTasksData) => Promise<Tasks>
	all: () => Promise<Tasks[]>
}

export interface INewTasksData
	extends Omit<ITasksData, 'id' | 'createdAt' | 'updatedAt' | 'category' | 'status'> {}
